import { KokoroTTS } from 'kokoro-js';
import { spawn } from 'node:child_process';
const tts = await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', { dtype: 'q8' });
console.log('model ready (from cache)');
const audio = await tts.generate('For processes A, B and C, which is cheapest at ten thousand units per year?', { voice: 'af_heart', speed: 0.95 });
console.log('generated, samples:', audio.data.length, 'sr:', audio.sampling_rate);
await new Promise((res, rej) => {
  const ff = spawn('ffmpeg', ['-hide_banner','-loglevel','error','-f','f32le','-ar','24000','-ac','1','-i','pipe:0','-codec:a','libmp3lame','-b:a','32k','-y','/tmp/test_voice.mp3']);
  ff.on('close', c => c===0?res():rej(new Error('ff '+c)));
  ff.on('error', rej);
  ff.stdin.write(Buffer.from(audio.data.buffer, audio.data.byteOffset, audio.data.byteLength));
  ff.stdin.end();
});
console.log('mp3 written');
