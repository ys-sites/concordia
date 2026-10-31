##
## Auto Generated makefile by CodeLite IDE
## any manual changes will be erased      
##
## Debug
ProjectName            :=project
ConfigurationName      :=Debug
WorkspaceConfiguration := $(ConfigurationName)
WorkspacePath          :=G:/mech215_2020/mech215_2020_new/2_variable_types/lectures/variable_types1/CodeLite_project
ProjectPath            :=G:/mech215_2020/mech215_2020_new/2_variable_types/lectures/variable_types1/CodeLite_project
IntermediateDirectory  :=./build-$(ConfigurationName)/
OutDir                 :=./build-$(ConfigurationName)/
CurrentFileName        :=
CurrentFilePath        :=
CurrentFileFullPath    :=
User                   :=Diane
Date                   :=14/09/2020
CodeLitePath           :="C:/Program Files/CodeLite"
LinkerName             :=C:/TDM-GCC-64/bin/g++.exe
SharedObjectLinkerName :=C:/TDM-GCC-64/bin/g++.exe -shared -fPIC
ObjectSuffix           :=.o
DependSuffix           :=.o.d
PreprocessSuffix       :=.i
DebugSwitch            :=-g 
IncludeSwitch          :=-I
LibrarySwitch          :=-l
OutputSwitch           :=-o 
LibraryPathSwitch      :=-L
PreprocessorSwitch     :=-D
SourceSwitch           :=-c 
OutputFile             :=.\build-$(ConfigurationName)\bin\$(ProjectName)
Preprocessors          :=
ObjectSwitch           :=-o 
ArchiveOutputSwitch    := 
PreprocessOnlySwitch   :=-E
ObjectsFileList        :=$(IntermediateDirectory)/ObjectsList.txt
PCHCompileFlags        :=
RcCmpOptions           := 
RcCompilerName         :=C:/TDM-GCC-64/bin/windres.exe
LinkOptions            :=  
IncludePath            :=  $(IncludeSwitch). $(IncludeSwitch). 
IncludePCH             := 
RcIncludePath          := 
Libs                   := 
ArLibs                 :=  
LibPath                := $(LibraryPathSwitch). 

##
## Common variables
## AR, CXX, CC, AS, CXXFLAGS and CFLAGS can be overriden using an environment variables
##
AR       := C:/TDM-GCC-64/bin/ar.exe rcu
CXX      := C:/TDM-GCC-64/bin/g++.exe
CC       := C:/TDM-GCC-64/bin/gcc.exe
CXXFLAGS :=  -g -O0 -Wall $(Preprocessors)
CFLAGS   :=  -g -O0 -Wall $(Preprocessors)
ASFLAGS  := 
AS       := C:/TDM-GCC-64/bin/as.exe


##
## User defined environment variables
##
CodeLiteDir:=C:\Program Files\CodeLite
Objects0=./build-$(ConfigurationName)//program.cpp$(ObjectSuffix) 



Objects=$(Objects0) 

##
## Main Build Targets 
##
.PHONY: all clean PreBuild PrePreBuild PostBuild MakeIntermediateDirs
all: MakeIntermediateDirs $(OutputFile)

$(OutputFile): ./build-$(ConfigurationName)//.d $(Objects) 
	@if not exist ".\build-$(ConfigurationName)\" mkdir ".\build-$(ConfigurationName)\"
	@echo "" > $(IntermediateDirectory)/.d
	@echo $(Objects0)  > $(ObjectsFileList)
	$(LinkerName) $(OutputSwitch)$(OutputFile) @$(ObjectsFileList) $(LibPath) $(Libs) $(LinkOptions)

MakeIntermediateDirs:
	@if not exist ".\build-$(ConfigurationName)\" mkdir ".\build-$(ConfigurationName)\"
	@if not exist "".\build-$(ConfigurationName)\bin"" mkdir "".\build-$(ConfigurationName)\bin""

./build-$(ConfigurationName)//.d:
	@if not exist ".\build-$(ConfigurationName)\" mkdir ".\build-$(ConfigurationName)\"

PreBuild:


##
## Objects
##
./build-$(ConfigurationName)//program.cpp$(ObjectSuffix): program.cpp ./build-$(ConfigurationName)//program.cpp$(DependSuffix)
	$(CXX) $(IncludePCH) $(SourceSwitch) "G:/mech215_2020/mech215_2020_new/2_variable_types/lectures/variable_types1/CodeLite_project/program.cpp" $(CXXFLAGS) $(ObjectSwitch)$(IntermediateDirectory)/program.cpp$(ObjectSuffix) $(IncludePath)
./build-$(ConfigurationName)//program.cpp$(DependSuffix): program.cpp
	@$(CXX) $(CXXFLAGS) $(IncludePCH) $(IncludePath) -MG -MP -MT./build-$(ConfigurationName)//program.cpp$(ObjectSuffix) -MF./build-$(ConfigurationName)//program.cpp$(DependSuffix) -MM program.cpp

./build-$(ConfigurationName)//program.cpp$(PreprocessSuffix): program.cpp
	$(CXX) $(CXXFLAGS) $(IncludePCH) $(IncludePath) $(PreprocessOnlySwitch) $(OutputSwitch) ./build-$(ConfigurationName)//program.cpp$(PreprocessSuffix) program.cpp


-include ./build-$(ConfigurationName)///*$(DependSuffix)
##
## Clean
##
clean:
	$(RM) -r $(IntermediateDirectory)


