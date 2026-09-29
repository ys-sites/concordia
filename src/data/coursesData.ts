import { CourseMeta, CourseDocument } from '../types';
import { isHiddenFromSite } from './localOnly';

export interface CourseWithDocs extends CourseMeta {
  documents: CourseDocument[];
}

const RAW_COURSES_DATA: CourseWithDocs[] = [
  {
    "id": "ENGR213",
    "code": "ENGR 213",
    "name": "Applied Ordinary Differential Equations",
    "department": "Department of Mechanical, Industrial and Aerospace Engineering",
    "term": "Fall 2026",
    "color": "indigo",
    "gradient": "from-indigo-600 via-purple-600 to-pink-600",
    "borderGlow": "rgba(99, 102, 241, 0.4)",
    "accentHex": "#6366f1",
    "iconName": "Sigma",
    "description": "First and second-order ODEs, linear models, integrating factors, substitutions, and Laplace transforms.",
    "totalDocuments": 41,
    "totalQuestions": 30,
    "categories": [
      {
        "id": "00 - Calculus Review for ODEs",
        "title": "00 - Calculus Review for ODEs",
        "count": 1,
        "description": "Course materials for 00 - Calculus Review for ODEs"
      },
      {
        "id": "00 - Course Syllabus & Textbook",
        "title": "00 - Course Syllabus & Textbook",
        "count": 2,
        "description": "Course materials for 00 - Course Syllabus & Textbook"
      },
      {
        "id": "00 - Course Syllabus & Textbook/Textbook Chapters",
        "title": "Textbook Chapters",
        "count": 5,
        "description": "Course materials for Textbook Chapters"
      },
      {
        "id": "01 - Teacher Lecture Notes",
        "title": "01 - Teacher Lecture Notes",
        "count": 6,
        "description": "Course materials for 01 - Teacher Lecture Notes"
      },
      {
        "id": "02 - Lecture Notes Explained",
        "title": "02 - Lecture Notes Explained",
        "count": 6,
        "description": "Course materials for 02 - Lecture Notes Explained"
      },
      {
        "id": "02 - Lecture Notes Explained/Archive & Alternatives",
        "title": "Archive & Alternatives",
        "count": 3,
        "description": "Course materials for Archive & Alternatives"
      },
      {
        "id": "03 - Chapter 1 Summary",
        "title": "03 - Chapter 1 Summary",
        "count": 3,
        "description": "Course materials for 03 - Chapter 1 Summary"
      },
      {
        "id": "04 - Chapter 2 Summary",
        "title": "04 - Chapter 2 Summary",
        "count": 9,
        "description": "Course materials for 04 - Chapter 2 Summary"
      },
      {
        "id": "05 - Textbook Solutions - Assigned Problems",
        "title": "05 - Textbook Solutions - Assigned Problems",
        "count": 2,
        "description": "Course materials for 05 - Textbook Solutions - Assigned Problems"
      },
      {
        "id": "06 - Quiz & Midterm Exam Prep",
        "title": "06 - Quiz & Midterm Exam Prep",
        "count": 4,
        "description": "Course materials for 06 - Quiz & Midterm Exam Prep"
      }
    ],
    "documents": [
      {
        "id": "ENGR213_1",
        "courseId": "ENGR213",
        "categoryId": "00 - Calculus Review for ODEs",
        "categoryTitle": "00 - Calculus Review for ODEs",
        "title": "Calculus for Differential Equations - Master Sheet",
        "filename": "Calculus for Differential Equations - Master Sheet.pdf",
        "relativePath": "Engr 213/00 - Calculus Review for ODEs/Calculus for Differential Equations - Master Sheet.pdf",
        "fileSizeBytes": 206597,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "00 - Calculus Review for ODEs",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Calculus for Differential Equations - Master Sheet"
      },
      {
        "id": "ENGR213_2",
        "courseId": "ENGR213",
        "categoryId": "00 - Course Syllabus & Textbook",
        "categoryTitle": "00 - Course Syllabus & Textbook",
        "title": "Calculus for Differential Equations - Master Sheet",
        "filename": "Calculus for Differential Equations - Master Sheet.pdf",
        "relativePath": "Engr 213/00 - Course Syllabus & Textbook/Calculus for Differential Equations - Master Sheet.pdf",
        "fileSizeBytes": 206597,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "00 - Course Syllabus & Textbook",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Calculus for Differential Equations - Master Sheet"
      },
      {
        "id": "ENGR213_3",
        "courseId": "ENGR213",
        "categoryId": "00 - Course Syllabus & Textbook",
        "categoryTitle": "00 - Course Syllabus & Textbook",
        "title": "ENGR 213 - Course Outline Fall 2026",
        "filename": "ENGR 213 - Course Outline Fall 2026.pdf",
        "relativePath": "Engr 213/00 - Course Syllabus & Textbook/ENGR 213 - Course Outline Fall 2026.pdf",
        "fileSizeBytes": 318588,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "00 - Course Syllabus & Textbook",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: ENGR 213 - Course Outline Fall 2026"
      },
      {
        "id": "ENGR213_5",
        "courseId": "ENGR213",
        "categoryId": "00 - Course Syllabus & Textbook/Textbook Chapters",
        "categoryTitle": "Textbook Chapters",
        "title": "Textbook Chapter 1 - Introduction to Differential Equations",
        "filename": "Textbook Chapter 1 - Introduction to Differential Equations.pdf",
        "relativePath": "Engr 213/00 - Course Syllabus & Textbook/Textbook Chapters/Textbook Chapter 1 - Introduction to Differential Equations.pdf",
        "fileSizeBytes": 9535822,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Textbook Chapters",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Textbook Chapter 1 - Introduction to Differential Equations"
      },
      {
        "id": "ENGR213_6",
        "courseId": "ENGR213",
        "categoryId": "00 - Course Syllabus & Textbook/Textbook Chapters",
        "categoryTitle": "Textbook Chapters",
        "title": "Textbook Chapter 2 - First-Order Differential Equations",
        "filename": "Textbook Chapter 2 - First-Order Differential Equations.pdf",
        "relativePath": "Engr 213/00 - Course Syllabus & Textbook/Textbook Chapters/Textbook Chapter 2 - First-Order Differential Equations.pdf",
        "fileSizeBytes": 11911826,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Textbook Chapters",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Textbook Chapter 2 - First-Order Differential Equations"
      },
      {
        "id": "ENGR213_7",
        "courseId": "ENGR213",
        "categoryId": "00 - Course Syllabus & Textbook/Textbook Chapters",
        "categoryTitle": "Textbook Chapters",
        "title": "Textbook Chapter 3 - Higher-Order Differential Equations",
        "filename": "Textbook Chapter 3 - Higher-Order Differential Equations.pdf",
        "relativePath": "Engr 213/00 - Course Syllabus & Textbook/Textbook Chapters/Textbook Chapter 3 - Higher-Order Differential Equations.pdf",
        "fileSizeBytes": 11411066,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Textbook Chapters",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Textbook Chapter 3 - Higher-Order Differential Equations"
      },
      {
        "id": "ENGR213_8",
        "courseId": "ENGR213",
        "categoryId": "00 - Course Syllabus & Textbook/Textbook Chapters",
        "categoryTitle": "Textbook Chapters",
        "title": "Textbook Chapter 4 - The Laplace Transform",
        "filename": "Textbook Chapter 4 - The Laplace Transform.pdf",
        "relativePath": "Engr 213/00 - Course Syllabus & Textbook/Textbook Chapters/Textbook Chapter 4 - The Laplace Transform.pdf",
        "fileSizeBytes": 7119066,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Textbook Chapters",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Textbook Chapter 4 - The Laplace Transform"
      },
      {
        "id": "ENGR213_9",
        "courseId": "ENGR213",
        "categoryId": "00 - Course Syllabus & Textbook/Textbook Chapters",
        "categoryTitle": "Textbook Chapters",
        "title": "Advanced_Engineering_Mathematics_Solutions_Manual",
        "filename": "Advanced_Engineering_Mathematics_Solutions_Manual.pdf",
        "relativePath": "Engr 213/00 - Course Syllabus & Textbook/Textbook Chapters/Advanced_Engineering_Mathematics_Solutions_Manual.pdf",
        "fileSizeBytes": 6434390,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Textbook Chapters",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Advanced_Engineering_Mathematics_Solutions_Manual"
      },
      {
        "id": "ENGR213_10",
        "courseId": "ENGR213",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "Lecture 1 - Introduction to Differential Equations",
        "filename": "Lecture 1 - Introduction to Differential Equations.pdf",
        "relativePath": "Engr 213/01 - Teacher Lecture Notes/Lecture 1 - Introduction to Differential Equations.pdf",
        "fileSizeBytes": 611974,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 1 - Introduction to Differential Equations"
      },
      {
        "id": "ENGR213_11",
        "courseId": "ENGR213",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "Lecture 2 - IVPs and Direction Fields",
        "filename": "Lecture 2 - IVPs and Direction Fields.pdf",
        "relativePath": "Engr 213/01 - Teacher Lecture Notes/Lecture 2 - IVPs and Direction Fields.pdf",
        "fileSizeBytes": 639951,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 2 - IVPs and Direction Fields"
      },
      {
        "id": "ENGR213_12",
        "courseId": "ENGR213",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "Lecture 3 - Separable and Linear Equations",
        "filename": "Lecture 3 - Separable and Linear Equations.pdf",
        "relativePath": "Engr 213/01 - Teacher Lecture Notes/Lecture 3 - Separable and Linear Equations.pdf",
        "fileSizeBytes": 324640,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 3 - Separable and Linear Equations"
      },
      {
        "id": "ENGR213_13",
        "courseId": "ENGR213",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "Lecture 4 - Exact Equations",
        "filename": "Lecture 4 - Exact Equations.pdf",
        "relativePath": "Engr 213/01 - Teacher Lecture Notes/Lecture 4 - Exact Equations.pdf",
        "fileSizeBytes": 293486,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 4 - Exact Equations"
      },
      {
        "id": "ENGR213_14",
        "courseId": "ENGR213",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "Lecture 5, September 23 2026",
        "filename": "Lecture 5, September 23 2026.pdf",
        "relativePath": "Engr 213/01 - Teacher Lecture Notes/Lecture 5, September 23 2026.pdf",
        "fileSizeBytes": 413496,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 5, September 23 2026"
      },
      {
        "id": "ENGR213_15",
        "courseId": "ENGR213",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "Lecture 6 - Linear Models, September 25 2026",
        "filename": "Lecture 6 - Linear Models, September 25 2026.pdf",
        "relativePath": "Engr 213/01 - Teacher Lecture Notes/Lecture 6 - Linear Models, September 25 2026.pdf",
        "fileSizeBytes": 533253,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 6 - Linear Models, September 25 2026"
      },
      {
        "id": "ENGR213_16",
        "courseId": "ENGR213",
        "categoryId": "02 - Lecture Notes Explained",
        "categoryTitle": "02 - Lecture Notes Explained",
        "title": "Lecture 1 - Introduction to DEs (Explained)",
        "filename": "Lecture 1 - Introduction to DEs (Explained).pdf",
        "relativePath": "Engr 213/02 - Lecture Notes Explained/Lecture 1 - Introduction to DEs (Explained).pdf",
        "fileSizeBytes": 348103,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "02 - Lecture Notes Explained",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 1 - Introduction to DEs (Explained)"
      },
      {
        "id": "ENGR213_17",
        "courseId": "ENGR213",
        "categoryId": "02 - Lecture Notes Explained",
        "categoryTitle": "02 - Lecture Notes Explained",
        "title": "Lecture 2 - IVPs and Direction Fields (Explained)",
        "filename": "Lecture 2 - IVPs and Direction Fields (Explained).pdf",
        "relativePath": "Engr 213/02 - Lecture Notes Explained/Lecture 2 - IVPs and Direction Fields (Explained).pdf",
        "fileSizeBytes": 350071,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "02 - Lecture Notes Explained",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 2 - IVPs and Direction Fields (Explained)"
      },
      {
        "id": "ENGR213_18",
        "courseId": "ENGR213",
        "categoryId": "02 - Lecture Notes Explained",
        "categoryTitle": "02 - Lecture Notes Explained",
        "title": "Lecture 3 - Separable and Linear Equations (Explained)",
        "filename": "Lecture 3 - Separable and Linear Equations (Explained).pdf",
        "relativePath": "Engr 213/02 - Lecture Notes Explained/Lecture 3 - Separable and Linear Equations (Explained).pdf",
        "fileSizeBytes": 561252,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "02 - Lecture Notes Explained",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 3 - Separable and Linear Equations (Explained)"
      },
      {
        "id": "ENGR213_19",
        "courseId": "ENGR213",
        "categoryId": "02 - Lecture Notes Explained",
        "categoryTitle": "02 - Lecture Notes Explained",
        "title": "Lecture 4 - Exact Equations (Explained)",
        "filename": "Lecture 4 - Exact Equations (Explained).pdf",
        "relativePath": "Engr 213/02 - Lecture Notes Explained/Lecture 4 - Exact Equations (Explained).pdf",
        "fileSizeBytes": 413310,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "02 - Lecture Notes Explained",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 4 - Exact Equations (Explained)"
      },
      {
        "id": "ENGR213_20",
        "courseId": "ENGR213",
        "categoryId": "02 - Lecture Notes Explained",
        "categoryTitle": "02 - Lecture Notes Explained",
        "title": "Lecture 5 - Solutions by Substitutions (Explained)",
        "filename": "Lecture 5 - Solutions by Substitutions (Explained).pdf",
        "relativePath": "Engr 213/02 - Lecture Notes Explained/Lecture 5 - Solutions by Substitutions (Explained).pdf",
        "fileSizeBytes": 491945,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "02 - Lecture Notes Explained",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 5 - Solutions by Substitutions (Explained)"
      },
      {
        "id": "ENGR213_21",
        "courseId": "ENGR213",
        "categoryId": "02 - Lecture Notes Explained",
        "categoryTitle": "02 - Lecture Notes Explained",
        "title": "Lecture 6 - Linear Mathematical Models (Explained)",
        "filename": "Lecture 6 - Linear Mathematical Models (Explained).pdf",
        "relativePath": "Engr 213/02 - Lecture Notes Explained/Lecture 6 - Linear Mathematical Models (Explained).pdf",
        "fileSizeBytes": 188020,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "02 - Lecture Notes Explained",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 6 - Linear Mathematical Models (Explained)"
      },
      {
        "id": "ENGR213_22",
        "courseId": "ENGR213",
        "categoryId": "02 - Lecture Notes Explained/Archive & Alternatives",
        "categoryTitle": "Archive & Alternatives",
        "title": "Lecture 1 - Beginners Guide (Alternative Draft)",
        "filename": "Lecture 1 - Beginners Guide (Alternative Draft).pdf",
        "relativePath": "Engr 213/02 - Lecture Notes Explained/Archive & Alternatives/Lecture 1 - Beginners Guide (Alternative Draft).pdf",
        "fileSizeBytes": 208422,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Archive & Alternatives",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 1 - Beginners Guide (Alternative Draft)"
      },
      {
        "id": "ENGR213_23",
        "courseId": "ENGR213",
        "categoryId": "02 - Lecture Notes Explained/Archive & Alternatives",
        "categoryTitle": "Archive & Alternatives",
        "title": "Lecture 2 - Plain English Guide (Alternative Draft)",
        "filename": "Lecture 2 - Plain English Guide (Alternative Draft).pdf",
        "relativePath": "Engr 213/02 - Lecture Notes Explained/Archive & Alternatives/Lecture 2 - Plain English Guide (Alternative Draft).pdf",
        "fileSizeBytes": 336325,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Archive & Alternatives",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 2 - Plain English Guide (Alternative Draft)"
      },
      {
        "id": "ENGR213_24",
        "courseId": "ENGR213",
        "categoryId": "02 - Lecture Notes Explained/Archive & Alternatives",
        "categoryTitle": "Archive & Alternatives",
        "title": "Lecture 3 - Detailed Calculation Notes",
        "filename": "Lecture 3 - Detailed Calculation Notes.pdf",
        "relativePath": "Engr 213/02 - Lecture Notes Explained/Archive & Alternatives/Lecture 3 - Detailed Calculation Notes.pdf",
        "fileSizeBytes": 16776,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Archive & Alternatives",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Lecture 3 - Detailed Calculation Notes"
      },
      {
        "id": "ENGR213_25",
        "courseId": "ENGR213",
        "categoryId": "03 - Chapter 1 Summary",
        "categoryTitle": "03 - Chapter 1 Summary",
        "title": "Chapter 1 - Assigned Homework Solutions",
        "filename": "Chapter 1 - Assigned Homework Solutions.pdf",
        "relativePath": "Engr 213/03 - Chapter 1 Summary/Chapter 1 - Assigned Homework Solutions.pdf",
        "fileSizeBytes": 327583,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "03 - Chapter 1 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Chapter 1 - Assigned Homework Solutions"
      },
      {
        "id": "ENGR213_26",
        "courseId": "ENGR213",
        "categoryId": "03 - Chapter 1 Summary",
        "categoryTitle": "03 - Chapter 1 Summary",
        "title": "Chapter 1 - Master Summary",
        "filename": "Chapter 1 - Master Summary.pdf",
        "relativePath": "Engr 213/03 - Chapter 1 Summary/Chapter 1 - Master Summary.pdf",
        "fileSizeBytes": 457094,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "03 - Chapter 1 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Chapter 1 - Master Summary"
      },
      {
        "id": "ENGR213_27",
        "courseId": "ENGR213",
        "categoryId": "03 - Chapter 1 Summary",
        "categoryTitle": "03 - Chapter 1 Summary",
        "title": "Chapter 1 - Textbook Excerpt",
        "filename": "Chapter 1 - Textbook Excerpt.pdf",
        "relativePath": "Engr 213/03 - Chapter 1 Summary/Chapter 1 - Textbook Excerpt.pdf",
        "fileSizeBytes": 9535822,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "03 - Chapter 1 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Chapter 1 - Textbook Excerpt"
      },
      {
        "id": "ENGR213_28",
        "courseId": "ENGR213",
        "categoryId": "04 - Chapter 2 Summary",
        "categoryTitle": "04 - Chapter 2 Summary",
        "title": "Chapter 2 - Assigned Homework Solutions",
        "filename": "Chapter 2 - Assigned Homework Solutions.pdf",
        "relativePath": "Engr 213/04 - Chapter 2 Summary/Chapter 2 - Assigned Homework Solutions.pdf",
        "fileSizeBytes": 719163,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Chapter 2 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Chapter 2 - Assigned Homework Solutions"
      },
      {
        "id": "ENGR213_29",
        "courseId": "ENGR213",
        "categoryId": "04 - Chapter 2 Summary",
        "categoryTitle": "04 - Chapter 2 Summary",
        "title": "Chapter 2 - Master Summary",
        "filename": "Chapter 2 - Master Summary.pdf",
        "relativePath": "Engr 213/04 - Chapter 2 Summary/Chapter 2 - Master Summary.pdf",
        "fileSizeBytes": 439871,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Chapter 2 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Chapter 2 - Master Summary"
      },
      {
        "id": "ENGR213_30",
        "courseId": "ENGR213",
        "categoryId": "04 - Chapter 2 Summary",
        "categoryTitle": "04 - Chapter 2 Summary",
        "title": "Topic 2.1 - Direction Fields & Autonomous Stability",
        "filename": "Topic 2.1 - Direction Fields & Autonomous Stability.pdf",
        "relativePath": "Engr 213/04 - Chapter 2 Summary/Topic 2.1 - Direction Fields & Autonomous Stability.pdf",
        "fileSizeBytes": 174196,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "04 - Chapter 2 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Topic 2.1 - Direction Fields & Autonomous Stability"
      },
      {
        "id": "ENGR213_31",
        "courseId": "ENGR213",
        "categoryId": "04 - Chapter 2 Summary",
        "categoryTitle": "04 - Chapter 2 Summary",
        "title": "Topic 2.2 - Separable Equations & Lost Solutions",
        "filename": "Topic 2.2 - Separable Equations & Lost Solutions.pdf",
        "relativePath": "Engr 213/04 - Chapter 2 Summary/Topic 2.2 - Separable Equations & Lost Solutions.pdf",
        "fileSizeBytes": 141733,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Chapter 2 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Topic 2.2 - Separable Equations & Lost Solutions"
      },
      {
        "id": "ENGR213_32",
        "courseId": "ENGR213",
        "categoryId": "04 - Chapter 2 Summary",
        "categoryTitle": "04 - Chapter 2 Summary",
        "title": "Topic 2.3 - Linear First-Order Equations",
        "filename": "Topic 2.3 - Linear First-Order Equations.pdf",
        "relativePath": "Engr 213/04 - Chapter 2 Summary/Topic 2.3 - Linear First-Order Equations.pdf",
        "fileSizeBytes": 157143,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "04 - Chapter 2 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Topic 2.3 - Linear First-Order Equations"
      },
      {
        "id": "ENGR213_33",
        "courseId": "ENGR213",
        "categoryId": "04 - Chapter 2 Summary",
        "categoryTitle": "04 - Chapter 2 Summary",
        "title": "Topic 2.4 - Exact Equations & Integrating Factors",
        "filename": "Topic 2.4 - Exact Equations & Integrating Factors.pdf",
        "relativePath": "Engr 213/04 - Chapter 2 Summary/Topic 2.4 - Exact Equations & Integrating Factors.pdf",
        "fileSizeBytes": 150705,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "04 - Chapter 2 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Topic 2.4 - Exact Equations & Integrating Factors"
      },
      {
        "id": "ENGR213_34",
        "courseId": "ENGR213",
        "categoryId": "04 - Chapter 2 Summary",
        "categoryTitle": "04 - Chapter 2 Summary",
        "title": "Topic 2.5 - Solutions by Substitution (Bernoulli & Homogeneous)",
        "filename": "Topic 2.5 - Solutions by Substitution (Bernoulli & Homogeneous).pdf",
        "relativePath": "Engr 213/04 - Chapter 2 Summary/Topic 2.5 - Solutions by Substitution (Bernoulli & Homogeneous).pdf",
        "fileSizeBytes": 145044,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Chapter 2 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Topic 2.5 - Solutions by Substitution (Bernoulli & Homogeneous)"
      },
      {
        "id": "ENGR213_35",
        "courseId": "ENGR213",
        "categoryId": "04 - Chapter 2 Summary",
        "categoryTitle": "04 - Chapter 2 Summary",
        "title": "Topic 2.7 & 2.8 - First-Order Modeling & Applications",
        "filename": "Topic 2.7 & 2.8 - First-Order Modeling & Applications.pdf",
        "relativePath": "Engr 213/04 - Chapter 2 Summary/Topic 2.7 & 2.8 - First-Order Modeling & Applications.pdf",
        "fileSizeBytes": 143105,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "04 - Chapter 2 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Topic 2.7 & 2.8 - First-Order Modeling & Applications"
      },
      {
        "id": "ENGR213_36",
        "courseId": "ENGR213",
        "categoryId": "04 - Chapter 2 Summary",
        "categoryTitle": "04 - Chapter 2 Summary",
        "title": "Chapter 2 - Textbook Excerpt",
        "filename": "Chapter 2 - Textbook Excerpt.pdf",
        "relativePath": "Engr 213/04 - Chapter 2 Summary/Chapter 2 - Textbook Excerpt.pdf",
        "fileSizeBytes": 11911826,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "04 - Chapter 2 Summary",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Chapter 2 - Textbook Excerpt"
      },
      {
        "id": "ENGR213_37",
        "courseId": "ENGR213",
        "categoryId": "05 - Textbook Solutions - Assigned Problems",
        "categoryTitle": "05 - Textbook Solutions - Assigned Problems",
        "title": "Chapter 1 - Assigned Homework Solutions",
        "filename": "Chapter 1 - Assigned Homework Solutions.pdf",
        "relativePath": "Engr 213/05 - Textbook Solutions - Assigned Problems/Chapter 1 - Assigned Homework Solutions.pdf",
        "fileSizeBytes": 327583,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "05 - Textbook Solutions - Assigned Problems",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Chapter 1 - Assigned Homework Solutions"
      },
      {
        "id": "ENGR213_38",
        "courseId": "ENGR213",
        "categoryId": "05 - Textbook Solutions - Assigned Problems",
        "categoryTitle": "05 - Textbook Solutions - Assigned Problems",
        "title": "Chapter 2 - Assigned Homework Solutions",
        "filename": "Chapter 2 - Assigned Homework Solutions.pdf",
        "relativePath": "Engr 213/05 - Textbook Solutions - Assigned Problems/Chapter 2 - Assigned Homework Solutions.pdf",
        "fileSizeBytes": 719163,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "05 - Textbook Solutions - Assigned Problems",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: Chapter 2 - Assigned Homework Solutions"
      },
      {
        "id": "ENGR213_39",
        "courseId": "ENGR213",
        "categoryId": "06 - Quiz & Midterm Exam Prep",
        "categoryTitle": "06 - Quiz & Midterm Exam Prep",
        "title": "ENGR 213 - Master Step-by-Step Solutions & Method Expansions",
        "filename": "ENGR 213 - Master Step-by-Step Solutions & Method Expansions.pdf",
        "relativePath": "Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Master Step-by-Step Solutions & Method Expansions.pdf",
        "fileSizeBytes": 384082,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "06 - Quiz & Midterm Exam Prep",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: ENGR 213 - Master Step-by-Step Solutions & Method Expansions"
      },
      {
        "id": "ENGR213_40",
        "courseId": "ENGR213",
        "categoryId": "06 - Quiz & Midterm Exam Prep",
        "categoryTitle": "06 - Quiz & Midterm Exam Prep",
        "title": "ENGR 213 - Quiz 1 Practice Exam & Master Solutions Guide",
        "filename": "ENGR 213 - Quiz 1 Practice Exam & Master Solutions Guide.pdf",
        "relativePath": "Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Quiz 1 Practice Exam & Master Solutions Guide.pdf",
        "fileSizeBytes": 665523,
        "isMasterGuide": true,
        "isHighYield": true,
        "tags": [
          "06 - Quiz & Midterm Exam Prep",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: ENGR 213 - Quiz 1 Practice Exam & Master Solutions Guide"
      },
      {
        "id": "ENGR213_41",
        "courseId": "ENGR213",
        "categoryId": "06 - Quiz & Midterm Exam Prep",
        "categoryTitle": "06 - Quiz & Midterm Exam Prep",
        "title": "ENGR 213 - Team Project 1 & Tutorial Preparation Master Guide (Linear Models)",
        "filename": "ENGR 213 - Team Project 1 & Tutorial Preparation Master Guide (Linear Models).pdf",
        "relativePath": "Engr 213/06 - Quiz & Midterm Exam Prep/ENGR 213 - Team Project 1 & Tutorial Preparation Master Guide (Linear Models).pdf",
        "fileSizeBytes": 289898,
        "isMasterGuide": true,
        "isHighYield": true,
        "tags": [
          "06 - Quiz & Midterm Exam Prep",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: ENGR 213 - Team Project 1 & Tutorial Preparation Master Guide (Linear Models)"
      },
      {
        "id": "ENGR213_42",
        "courseId": "ENGR213",
        "categoryId": "06 - Quiz & Midterm Exam Prep",
        "categoryTitle": "06 - Quiz & Midterm Exam Prep",
        "title": "exact_ode_step_by_step",
        "filename": "exact_ode_step_by_step.pdf",
        "relativePath": "Engr 213/06 - Quiz & Midterm Exam Prep/exact_ode_step_by_step.pdf",
        "fileSizeBytes": 29246,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "06 - Quiz & Midterm Exam Prep",
          "ENGR 213"
        ],
        "summary": "Official curriculum document for ENGR 213: exact_ode_step_by_step"
      }
    ]
  },
  {
    "id": "INDU211",
    "code": "INDU 211",
    "name": "Introduction to Production and Manufacturing Systems",
    "department": "Department of Mechanical, Industrial and Aerospace Engineering",
    "term": "Fall 2026",
    "color": "amber",
    "gradient": "from-amber-500 via-orange-600 to-red-600",
    "borderGlow": "rgba(245, 158, 11, 0.4)",
    "accentHex": "#f59e0b",
    "iconName": "Factory",
    "description": "Production systems, break-even analysis, facility layouts, line balancing, inventory, and GenAI Industry 5.0.",
    "totalDocuments": 44,
    "totalQuestions": 30,
    "categories": [
      {
        "id": "00 - Course Overview & Study Guide",
        "title": "00 - Course Overview & Study Guide",
        "count": 2,
        "description": "Course materials for 00 - Course Overview & Study Guide"
      },
      {
        "id": "01 - Teacher Lecture Notes",
        "title": "01 - Teacher Lecture Notes",
        "count": 13,
        "description": "Course materials for 01 - Teacher Lecture Notes"
      },
      {
        "id": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "count": 3,
        "description": "Course materials for 02 - Comprehensive Topic Guides (Expanded & Intuitive)"
      },
      {
        "id": "03 - 1-Page Rapid Review Sheets",
        "title": "03 - 1-Page Rapid Review Sheets",
        "count": 3,
        "description": "Course materials for 03 - 1-Page Rapid Review Sheets"
      },
      {
        "id": "04 - Worked Problems & Quantitative Analysis",
        "title": "04 - Worked Problems & Quantitative Analysis",
        "count": 3,
        "description": "Course materials for 04 - Worked Problems & Quantitative Analysis"
      },
      {
        "id": "05 - Assignments & Solutions/Assignment 1",
        "title": "Assignment 1",
        "count": 2,
        "description": "Course materials for Assignment 1"
      },
      {
        "id": "05 - Assignments & Solutions/Assignment 2",
        "title": "Assignment 2",
        "count": 2,
        "description": "Course materials for Assignment 2"
      },
      {
        "id": "05 - Assignments & Solutions/Assignment 3",
        "title": "Assignment 3",
        "count": 3,
        "description": "Course materials for Assignment 3"
      },
      {
        "id": "05 - Assignments & Solutions/Assignment 4",
        "title": "Assignment 4",
        "count": 3,
        "description": "Course materials for Assignment 4"
      },
      {
        "id": "05 - Assignments & Solutions/Assignment 5",
        "title": "Assignment 5",
        "count": 3,
        "description": "Course materials for Assignment 5"
      },
      {
        "id": "05 - Assignments & Solutions/Term Paper & Final Project",
        "title": "Term Paper & Final Project",
        "count": 7,
        "description": "Course materials for Term Paper & Final Project"
      }
    ],
    "documents": [
      {
        "id": "INDU211_1",
        "courseId": "INDU211",
        "categoryId": "00 - Course Overview & Study Guide",
        "categoryTitle": "00 - Course Overview & Study Guide",
        "title": "INDU 211 - Master Study Guide & Exam Strategy",
        "filename": "INDU 211 - Master Study Guide & Exam Strategy.pdf",
        "relativePath": "Indu 211/00 - Course Overview & Study Guide/INDU 211 - Master Study Guide & Exam Strategy.pdf",
        "fileSizeBytes": 243715,
        "isMasterGuide": true,
        "isHighYield": true,
        "tags": [
          "00 - Course Overview & Study Guide",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: INDU 211 - Master Study Guide & Exam Strategy"
      },
      {
        "id": "INDU211_2",
        "courseId": "INDU211",
        "categoryId": "00 - Course Overview & Study Guide",
        "categoryTitle": "00 - Course Overview & Study Guide",
        "title": "INDU211-2026-Fall-Course Outline",
        "filename": "INDU211-2026-Fall-Course Outline.pdf",
        "relativePath": "Indu 211/00 - Course Overview & Study Guide/INDU211-2026-Fall-Course Outline.pdf",
        "fileSizeBytes": 342089,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "00 - Course Overview & Study Guide",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: INDU211-2026-Fall-Course Outline"
      },
      {
        "id": "INDU211_3",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "1.0.INDU_211_CH12_2025",
        "filename": "1.0.INDU_211_CH12_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/1.0.INDU_211_CH12_2025.pdf",
        "fileSizeBytes": 413386,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 1.0.INDU_211_CH12_2025"
      },
      {
        "id": "INDU211_4",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "10.INDU_211_CH15_2025",
        "filename": "10.INDU_211_CH15_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/10.INDU_211_CH15_2025.pdf",
        "fileSizeBytes": 522464,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 10.INDU_211_CH15_2025"
      },
      {
        "id": "INDU211_5",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "11.INDU_211_CH8_2025",
        "filename": "11.INDU_211_CH8_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/11.INDU_211_CH8_2025.pdf",
        "fileSizeBytes": 1611443,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 11.INDU_211_CH8_2025"
      },
      {
        "id": "INDU211_6",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "12.INDU_211_CH6and11_2025",
        "filename": "12.INDU_211_CH6and11_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/12.INDU_211_CH6and11_2025.pdf",
        "fileSizeBytes": 1229464,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 12.INDU_211_CH6and11_2025"
      },
      {
        "id": "INDU211_7",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "13.INDU_211_CH17_2025",
        "filename": "13.INDU_211_CH17_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/13.INDU_211_CH17_2025.pdf",
        "fileSizeBytes": 1050192,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 13.INDU_211_CH17_2025"
      },
      {
        "id": "INDU211_8",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "2.0.INDU_211_CH3_2025",
        "filename": "2.0.INDU_211_CH3_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/2.0.INDU_211_CH3_2025.pdf",
        "fileSizeBytes": 1273604,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 2.0.INDU_211_CH3_2025"
      },
      {
        "id": "INDU211_9",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "3.0.INDU_211_CH4_1-2025",
        "filename": "3.0.INDU_211_CH4_1-2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/3.0.INDU_211_CH4_1-2025.pdf",
        "fileSizeBytes": 490190,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 3.0.INDU_211_CH4_1-2025"
      },
      {
        "id": "INDU211_10",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "4.0.INDU_211_CH4_2_2025",
        "filename": "4.0.INDU_211_CH4_2_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/4.0.INDU_211_CH4_2_2025.pdf",
        "fileSizeBytes": 1368316,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 4.0.INDU_211_CH4_2_2025"
      },
      {
        "id": "INDU211_11",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "5.0.INDU_211_CH5_2025",
        "filename": "5.0.INDU_211_CH5_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/5.0.INDU_211_CH5_2025.pdf",
        "fileSizeBytes": 1236050,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 5.0.INDU_211_CH5_2025"
      },
      {
        "id": "INDU211_12",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "6.0.INDU_211_CH7-1_2025",
        "filename": "6.0.INDU_211_CH7-1_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/6.0.INDU_211_CH7-1_2025.pdf",
        "fileSizeBytes": 388244,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 6.0.INDU_211_CH7-1_2025"
      },
      {
        "id": "INDU211_13",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "7.0.INDU_211_CH7_2_2025-F",
        "filename": "7.0.INDU_211_CH7_2_2025-F.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/7.0.INDU_211_CH7_2_2025-F.pdf",
        "fileSizeBytes": 959944,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 7.0.INDU_211_CH7_2_2025-F"
      },
      {
        "id": "INDU211_14",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "8.0.INDU_211_CH7_3_2025F",
        "filename": "8.0.INDU_211_CH7_3_2025F.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/8.0.INDU_211_CH7_3_2025F.pdf",
        "fileSizeBytes": 586950,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 8.0.INDU_211_CH7_3_2025F"
      },
      {
        "id": "INDU211_15",
        "courseId": "INDU211",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "9.0.INDU_211_CH14_2025",
        "filename": "9.0.INDU_211_CH14_2025.pdf",
        "relativePath": "Indu 211/01 - Teacher Lecture Notes/9.0.INDU_211_CH14_2025.pdf",
        "fileSizeBytes": 364942,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: 9.0.INDU_211_CH14_2025"
      },
      {
        "id": "INDU211_16",
        "courseId": "INDU211",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 1 - Chapters 1 & 2 - Foundations of Industrial & Systems Engineering",
        "filename": "Part 1 - Chapters 1 & 2 - Foundations of Industrial & Systems Engineering.pdf",
        "relativePath": "Indu 211/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 1 - Chapters 1 & 2 - Foundations of Industrial & Systems Engineering.pdf",
        "fileSizeBytes": 258481,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Part 1 - Chapters 1 & 2 - Foundations of Industrial & Systems Engineering"
      },
      {
        "id": "INDU211_17",
        "courseId": "INDU211",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 2 - Chapter 3 - Manufacturing & Process Engineering Master Guide",
        "filename": "Part 2 - Chapter 3 - Manufacturing & Process Engineering Master Guide.pdf",
        "relativePath": "Indu 211/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 2 - Chapter 3 - Manufacturing & Process Engineering Master Guide.pdf",
        "fileSizeBytes": 383825,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Part 2 - Chapter 3 - Manufacturing & Process Engineering Master Guide"
      },
      {
        "id": "INDU211_18",
        "courseId": "INDU211",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 3 - Chapter 4 - Facilities Location, Layout & Material Handling Master Guide",
        "filename": "Part 3 - Chapter 4 - Facilities Location, Layout & Material Handling Master Guide.pdf",
        "relativePath": "Indu 211/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 3 - Chapter 4 - Facilities Location, Layout & Material Handling Master Guide.pdf",
        "fileSizeBytes": 494305,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Part 3 - Chapter 4 - Facilities Location, Layout & Material Handling Master Guide"
      },
      {
        "id": "INDU211_19",
        "courseId": "INDU211",
        "categoryId": "03 - 1-Page Rapid Review Sheets",
        "categoryTitle": "03 - 1-Page Rapid Review Sheets",
        "title": "Part 1 - Chapters 1 & 2 - One-Page Rapid Review Sheet",
        "filename": "Part 1 - Chapters 1 & 2 - One-Page Rapid Review Sheet.pdf",
        "relativePath": "Indu 211/03 - 1-Page Rapid Review Sheets/Part 1 - Chapters 1 & 2 - One-Page Rapid Review Sheet.pdf",
        "fileSizeBytes": 129086,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "03 - 1-Page Rapid Review Sheets",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Part 1 - Chapters 1 & 2 - One-Page Rapid Review Sheet"
      },
      {
        "id": "INDU211_20",
        "courseId": "INDU211",
        "categoryId": "03 - 1-Page Rapid Review Sheets",
        "categoryTitle": "03 - 1-Page Rapid Review Sheets",
        "title": "Part 2 - Chapter 3 - One-Page Rapid Review Sheet",
        "filename": "Part 2 - Chapter 3 - One-Page Rapid Review Sheet.pdf",
        "relativePath": "Indu 211/03 - 1-Page Rapid Review Sheets/Part 2 - Chapter 3 - One-Page Rapid Review Sheet.pdf",
        "fileSizeBytes": 133105,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "03 - 1-Page Rapid Review Sheets",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Part 2 - Chapter 3 - One-Page Rapid Review Sheet"
      },
      {
        "id": "INDU211_21",
        "courseId": "INDU211",
        "categoryId": "03 - 1-Page Rapid Review Sheets",
        "categoryTitle": "03 - 1-Page Rapid Review Sheets",
        "title": "Part 3 - Chapter 4 - One-Page Rapid Review Sheet",
        "filename": "Part 3 - Chapter 4 - One-Page Rapid Review Sheet.pdf",
        "relativePath": "Indu 211/03 - 1-Page Rapid Review Sheets/Part 3 - Chapter 4 - One-Page Rapid Review Sheet.pdf",
        "fileSizeBytes": 141607,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "03 - 1-Page Rapid Review Sheets",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Part 3 - Chapter 4 - One-Page Rapid Review Sheet"
      },
      {
        "id": "INDU211_22",
        "courseId": "INDU211",
        "categoryId": "04 - Worked Problems & Quantitative Analysis",
        "categoryTitle": "04 - Worked Problems & Quantitative Analysis",
        "title": "Cost-Volume & Break-Even Engineering Decision Guide",
        "filename": "Cost-Volume & Break-Even Engineering Decision Guide.pdf",
        "relativePath": "Indu 211/04 - Worked Problems & Quantitative Analysis/Cost-Volume & Break-Even Engineering Decision Guide.pdf",
        "fileSizeBytes": 166501,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Worked Problems & Quantitative Analysis",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Cost-Volume & Break-Even Engineering Decision Guide"
      },
      {
        "id": "INDU211_23",
        "courseId": "INDU211",
        "categoryId": "04 - Worked Problems & Quantitative Analysis",
        "categoryTitle": "04 - Worked Problems & Quantitative Analysis",
        "title": "Facilities Location & Transportation Quantitative Decision Guide",
        "filename": "Facilities Location & Transportation Quantitative Decision Guide.pdf",
        "relativePath": "Indu 211/04 - Worked Problems & Quantitative Analysis/Facilities Location & Transportation Quantitative Decision Guide.pdf",
        "fileSizeBytes": 298208,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Worked Problems & Quantitative Analysis",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Facilities Location & Transportation Quantitative Decision Guide"
      },
      {
        "id": "INDU211_24",
        "courseId": "INDU211",
        "categoryId": "04 - Worked Problems & Quantitative Analysis",
        "categoryTitle": "04 - Worked Problems & Quantitative Analysis",
        "title": "INDU 211 - Step-by-Step Quantitative Operations Guide",
        "filename": "INDU 211 - Step-by-Step Quantitative Operations Guide.pdf",
        "relativePath": "Indu 211/04 - Worked Problems & Quantitative Analysis/INDU 211 - Step-by-Step Quantitative Operations Guide.pdf",
        "fileSizeBytes": 409171,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Worked Problems & Quantitative Analysis",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: INDU 211 - Step-by-Step Quantitative Operations Guide"
      },
      {
        "id": "INDU211_25",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 1",
        "categoryTitle": "Assignment 1",
        "title": "Assignment 1 - Solutions",
        "filename": "Assignment 1 - Solutions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 1/Assignment 1 - Solutions.pdf",
        "fileSizeBytes": 402491,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Assignment 1",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 1 - Solutions"
      },
      {
        "id": "INDU211_26",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 1",
        "categoryTitle": "Assignment 1",
        "title": "Assignment 1",
        "filename": "Assignment 1.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 1/Assignment 1.pdf",
        "fileSizeBytes": 112373,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 1",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 1"
      },
      {
        "id": "INDU211_27",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 2",
        "categoryTitle": "Assignment 2",
        "title": "Assignment 2 - Moodle instructions",
        "filename": "Assignment 2 - Moodle instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 2/Assignment 2 - Moodle instructions.pdf",
        "fileSizeBytes": 50348,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 2",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 2 - Moodle instructions"
      },
      {
        "id": "INDU211_28",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 2",
        "categoryTitle": "Assignment 2",
        "title": "Assignment 2",
        "filename": "Assignment 2.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 2/Assignment 2.pdf",
        "fileSizeBytes": 507281,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 2",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 2"
      },
      {
        "id": "INDU211_29",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 3",
        "categoryTitle": "Assignment 3",
        "title": "Assignment 3 - Moodle instructions",
        "filename": "Assignment 3 - Moodle instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 3/Assignment 3 - Moodle instructions.pdf",
        "fileSizeBytes": 24147,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 3",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 3 - Moodle instructions"
      },
      {
        "id": "INDU211_30",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 3",
        "categoryTitle": "Assignment 3",
        "title": "Assignment 3 - submission instructions",
        "filename": "Assignment 3 - submission instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 3/Assignment 3 - submission instructions.pdf",
        "fileSizeBytes": 49858,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 3",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 3 - submission instructions"
      },
      {
        "id": "INDU211_31",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 3",
        "categoryTitle": "Assignment 3",
        "title": "Assignment 3",
        "filename": "Assignment 3.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 3/Assignment 3.pdf",
        "fileSizeBytes": 378494,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 3",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 3"
      },
      {
        "id": "INDU211_32",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 4",
        "categoryTitle": "Assignment 4",
        "title": "Assignment 4 - Moodle instructions",
        "filename": "Assignment 4 - Moodle instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 4/Assignment 4 - Moodle instructions.pdf",
        "fileSizeBytes": 24073,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 4",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 4 - Moodle instructions"
      },
      {
        "id": "INDU211_33",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 4",
        "categoryTitle": "Assignment 4",
        "title": "Assignment 4 - submission instructions",
        "filename": "Assignment 4 - submission instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 4/Assignment 4 - submission instructions.pdf",
        "fileSizeBytes": 49288,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 4",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 4 - submission instructions"
      },
      {
        "id": "INDU211_34",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 4",
        "categoryTitle": "Assignment 4",
        "title": "Assignment 4",
        "filename": "Assignment 4.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 4/Assignment 4.pdf",
        "fileSizeBytes": 175190,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 4",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 4"
      },
      {
        "id": "INDU211_35",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 5",
        "categoryTitle": "Assignment 5",
        "title": "Assignment 5 - Moodle instructions",
        "filename": "Assignment 5 - Moodle instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 5/Assignment 5 - Moodle instructions.pdf",
        "fileSizeBytes": 24139,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 5",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 5 - Moodle instructions"
      },
      {
        "id": "INDU211_36",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 5",
        "categoryTitle": "Assignment 5",
        "title": "Assignment 5 - submission instructions",
        "filename": "Assignment 5 - submission instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 5/Assignment 5 - submission instructions.pdf",
        "fileSizeBytes": 49595,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 5",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 5 - submission instructions"
      },
      {
        "id": "INDU211_37",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Assignment 5",
        "categoryTitle": "Assignment 5",
        "title": "Assignment 5",
        "filename": "Assignment 5.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Assignment 5/Assignment 5.pdf",
        "fileSizeBytes": 206456,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Assignment 5",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Assignment 5"
      },
      {
        "id": "INDU211_38",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Term Paper & Final Project",
        "categoryTitle": "Term Paper & Final Project",
        "title": "Final project submission - Moodle instructions",
        "filename": "Final project submission - Moodle instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Term Paper & Final Project/Final project submission - Moodle instructions.pdf",
        "fileSizeBytes": 43885,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "Term Paper & Final Project",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Final project submission - Moodle instructions"
      },
      {
        "id": "INDU211_39",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Term Paper & Final Project",
        "categoryTitle": "Term Paper & Final Project",
        "title": "INDU 211 - Term Paper Group Proposal (1-Page Official)",
        "filename": "INDU 211 - Term Paper Group Proposal (1-Page Official).pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Term Paper & Final Project/INDU 211 - Term Paper Group Proposal (1-Page Official).pdf",
        "fileSizeBytes": 91485,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Term Paper & Final Project",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: INDU 211 - Term Paper Group Proposal (1-Page Official)"
      },
      {
        "id": "INDU211_40",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Term Paper & Final Project",
        "categoryTitle": "Term Paper & Final Project",
        "title": "INDU 211 - Term Paper Master Report (The Future of IE in the GenAI Era)",
        "filename": "INDU 211 - Term Paper Master Report (The Future of IE in the GenAI Era).pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Term Paper & Final Project/INDU 211 - Term Paper Master Report (The Future of IE in the GenAI Era).pdf",
        "fileSizeBytes": 362964,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Term Paper & Final Project",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: INDU 211 - Term Paper Master Report (The Future of IE in the GenAI Era)"
      },
      {
        "id": "INDU211_41",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Term Paper & Final Project",
        "categoryTitle": "Term Paper & Final Project",
        "title": "INDU 211 - Term Paper Presentation Guide & 15-Minute Video Script",
        "filename": "INDU 211 - Term Paper Presentation Guide & 15-Minute Video Script.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Term Paper & Final Project/INDU 211 - Term Paper Presentation Guide & 15-Minute Video Script.pdf",
        "fileSizeBytes": 141280,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Term Paper & Final Project",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: INDU 211 - Term Paper Presentation Guide & 15-Minute Video Script"
      },
      {
        "id": "INDU211_42",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Term Paper & Final Project",
        "categoryTitle": "Term Paper & Final Project",
        "title": "Project video submission - Moodle instructions",
        "filename": "Project video submission - Moodle instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Term Paper & Final Project/Project video submission - Moodle instructions.pdf",
        "fileSizeBytes": 66642,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "Term Paper & Final Project",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Project video submission - Moodle instructions"
      },
      {
        "id": "INDU211_43",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Term Paper & Final Project",
        "categoryTitle": "Term Paper & Final Project",
        "title": "Term Paper Description",
        "filename": "Term Paper Description.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Term Paper & Final Project/Term Paper Description.pdf",
        "fileSizeBytes": 78656,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Term Paper & Final Project",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Term Paper Description"
      },
      {
        "id": "INDU211_44",
        "courseId": "INDU211",
        "categoryId": "05 - Assignments & Solutions/Term Paper & Final Project",
        "categoryTitle": "Term Paper & Final Project",
        "title": "Term paper group proposal - Moodle instructions",
        "filename": "Term paper group proposal - Moodle instructions.pdf",
        "relativePath": "Indu 211/05 - Assignments & Solutions/Term Paper & Final Project/Term paper group proposal - Moodle instructions.pdf",
        "fileSizeBytes": 48847,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Term Paper & Final Project",
          "INDU 211"
        ],
        "summary": "Official curriculum document for INDU 211: Term paper group proposal - Moodle instructions"
      }
    ]
  },
  {
    "id": "MIAE215",
    "code": "MIAE 215",
    "name": "Programming for Mechanical & Industrial Engineers",
    "department": "Department of Mechanical, Industrial and Aerospace Engineering",
    "term": "Fall 2026",
    "color": "emerald",
    "gradient": "from-emerald-500 via-teal-600 to-cyan-600",
    "borderGlow": "rgba(16, 185, 129, 0.4)",
    "accentHex": "#10b981",
    "iconName": "Terminal",
    "description": "C++ computational algorithms, memory architecture, control flow, arrays, Flowgorithm, and Arduino mechatronics.",
    "totalDocuments": 39,
    "totalQuestions": 30,
    "categories": [
      {
        "id": "00 - Course Overview & Study Guide",
        "title": "00 - Course Overview & Study Guide",
        "count": 2,
        "description": "Course materials for 00 - Course Overview & Study Guide"
      },
      {
        "id": "01 - Teacher Lecture Notes & Slides",
        "title": "01 - Teacher Lecture Notes & Slides",
        "count": 8,
        "description": "Course materials for 01 - Teacher Lecture Notes & Slides"
      },
      {
        "id": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "count": 4,
        "description": "Course materials for 02 - Comprehensive Topic Guides (Expanded & Intuitive)"
      },
      {
        "id": "03 - 1-Page Rapid Review Sheets",
        "title": "03 - 1-Page Rapid Review Sheets",
        "count": 3,
        "description": "Course materials for 03 - 1-Page Rapid Review Sheets"
      },
      {
        "id": "04 - Practice Problems & Code Solutions",
        "title": "04 - Practice Problems & Code Solutions",
        "count": 4,
        "description": "Course materials for 04 - Practice Problems & Code Solutions"
      },
      {
        "id": "05 - Software & Flowcharts",
        "title": "05 - Software & Flowcharts",
        "count": 1,
        "description": "Course materials for 05 - Software & Flowcharts"
      },
      {
        "id": "05 - Software & Flowcharts/CodeBlocks_17.12_portable/share/CodeBlocks/docs",
        "title": "docs",
        "count": 1,
        "description": "Course materials for docs"
      },
      {
        "id": "06 - Arduino Labs & Term Project",
        "title": "06 - Arduino Labs & Term Project",
        "count": 1,
        "description": "Course materials for 06 - Arduino Labs & Term Project"
      },
      {
        "id": "06 - Arduino Labs & Term Project/00 - Lab Overview & Hardware Kit Guide",
        "title": "00 - Lab Overview & Hardware Kit Guide",
        "count": 2,
        "description": "Course materials for 00 - Lab Overview & Hardware Kit Guide"
      },
      {
        "id": "06 - Arduino Labs & Term Project/Arduino Term Project - Guidelines & Sensor Modules",
        "title": "Arduino Term Project - Guidelines & Sensor Modules",
        "count": 1,
        "description": "Course materials for Arduino Term Project - Guidelines & Sensor Modules"
      },
      {
        "id": "06 - Arduino Labs & Term Project/Lab 1 - Introduction to Arduino & Software Setup",
        "title": "Lab 1 - Introduction to Arduino & Software Setup",
        "count": 1,
        "description": "Course materials for Lab 1 - Introduction to Arduino & Software Setup"
      },
      {
        "id": "06 - Arduino Labs & Term Project/Lab 2 - Digital Input Output (DIO) & LED Sequencing",
        "title": "Lab 2 - Digital Input Output (DIO) & LED Sequencing",
        "count": 1,
        "description": "Course materials for Lab 2 - Digital Input Output (DIO) & LED Sequencing"
      },
      {
        "id": "06 - Arduino Labs & Term Project/Lab 3 - Sensors & Servo Actuators",
        "title": "Lab 3 - Sensors & Servo Actuators",
        "count": 1,
        "description": "Course materials for Lab 3 - Sensors & Servo Actuators"
      },
      {
        "id": "Mini Course",
        "title": "Mini Course",
        "count": 1,
        "description": "Course materials for Mini Course"
      },
      {
        "id": "Mini Course/00 - Overview & Troubleshooting",
        "title": "00 - Overview & Troubleshooting",
        "count": 2,
        "description": "Course materials for 00 - Overview & Troubleshooting"
      },
      {
        "id": "Mini Course/Lesson 1 - Software Installation",
        "title": "Lesson 1 - Software Installation",
        "count": 1,
        "description": "Course materials for Lesson 1 - Software Installation"
      },
      {
        "id": "Mini Course/Lesson 2 - C++ Programs",
        "title": "Lesson 2 - C++ Programs",
        "count": 1,
        "description": "Course materials for Lesson 2 - C++ Programs"
      },
      {
        "id": "Mini Course/Lesson 3 - Variable Types",
        "title": "Lesson 3 - Variable Types",
        "count": 1,
        "description": "Course materials for Lesson 3 - Variable Types"
      },
      {
        "id": "Mini Course/Lesson 4 - Expressions & Operators",
        "title": "Lesson 4 - Expressions & Operators",
        "count": 1,
        "description": "Course materials for Lesson 4 - Expressions & Operators"
      },
      {
        "id": "Mini Course/Lesson 5 - Control Statements",
        "title": "Lesson 5 - Control Statements",
        "count": 1,
        "description": "Course materials for Lesson 5 - Control Statements"
      },
      {
        "id": "Mini Course/Lesson 6 - Arrays",
        "title": "Lesson 6 - Arrays",
        "count": 1,
        "description": "Course materials for Lesson 6 - Arrays"
      }
    ],
    "documents": [
      {
        "id": "MIAE215_1",
        "courseId": "MIAE215",
        "categoryId": "00 - Course Overview & Study Guide",
        "categoryTitle": "00 - Course Overview & Study Guide",
        "title": "MIAE 215 - C++ Master Study Guide & Programming Roadmap",
        "filename": "MIAE 215 - C++ Master Study Guide & Programming Roadmap.pdf",
        "relativePath": "Miae 215/00 - Course Overview & Study Guide/MIAE 215 - C++ Master Study Guide & Programming Roadmap.pdf",
        "fileSizeBytes": 236298,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "00 - Course Overview & Study Guide",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: MIAE 215 - C++ Master Study Guide & Programming Roadmap"
      },
      {
        "id": "MIAE215_2",
        "courseId": "MIAE215",
        "categoryId": "00 - Course Overview & Study Guide",
        "categoryTitle": "00 - Course Overview & Study Guide",
        "title": "MIAE_215_outline_fall_2026_section_Y.docx",
        "filename": "MIAE_215_outline_fall_2026_section_Y.docx.pdf",
        "relativePath": "Miae 215/00 - Course Overview & Study Guide/MIAE_215_outline_fall_2026_section_Y.docx.pdf",
        "fileSizeBytes": 267088,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "00 - Course Overview & Study Guide",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: MIAE_215_outline_fall_2026_section_Y.docx"
      },
      {
        "id": "MIAE215_3",
        "courseId": "MIAE215",
        "categoryId": "01 - Teacher Lecture Notes & Slides",
        "categoryTitle": "01 - Teacher Lecture Notes & Slides",
        "title": "Q2_e",
        "filename": "Q2_e.pdf",
        "relativePath": "Miae 215/01 - Teacher Lecture Notes & Slides/Q2_e.pdf",
        "fileSizeBytes": 7974,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes & Slides",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Q2_e"
      },
      {
        "id": "MIAE215_4",
        "courseId": "MIAE215",
        "categoryId": "01 - Teacher Lecture Notes & Slides",
        "categoryTitle": "01 - Teacher Lecture Notes & Slides",
        "title": "Week 4 - Lecture 1 - Moodle page",
        "filename": "Week 4 - Lecture 1 - Moodle page.pdf",
        "relativePath": "Miae 215/01 - Teacher Lecture Notes & Slides/Week 4 - Lecture 1 - Moodle page.pdf",
        "fileSizeBytes": 36289,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes & Slides",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Week 4 - Lecture 1 - Moodle page"
      },
      {
        "id": "MIAE215_5",
        "courseId": "MIAE215",
        "categoryId": "01 - Teacher Lecture Notes & Slides",
        "categoryTitle": "01 - Teacher Lecture Notes & Slides",
        "title": "Week 4 - Lecture 2 - Moodle page",
        "filename": "Week 4 - Lecture 2 - Moodle page.pdf",
        "relativePath": "Miae 215/01 - Teacher Lecture Notes & Slides/Week 4 - Lecture 2 - Moodle page.pdf",
        "fileSizeBytes": 36543,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes & Slides",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Week 4 - Lecture 2 - Moodle page"
      },
      {
        "id": "MIAE215_6",
        "courseId": "MIAE215",
        "categoryId": "01 - Teacher Lecture Notes & Slides",
        "categoryTitle": "01 - Teacher Lecture Notes & Slides",
        "title": "control_statements1",
        "filename": "control_statements1.pdf",
        "relativePath": "Miae 215/01 - Teacher Lecture Notes & Slides/control_statements1.pdf",
        "fileSizeBytes": 739720,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes & Slides",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: control_statements1"
      },
      {
        "id": "MIAE215_7",
        "courseId": "MIAE215",
        "categoryId": "01 - Teacher Lecture Notes & Slides",
        "categoryTitle": "01 - Teacher Lecture Notes & Slides",
        "title": "control_statements1_part2",
        "filename": "control_statements1_part2.pdf",
        "relativePath": "Miae 215/01 - Teacher Lecture Notes & Slides/control_statements1_part2.pdf",
        "fileSizeBytes": 580484,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes & Slides",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: control_statements1_part2"
      },
      {
        "id": "MIAE215_8",
        "courseId": "MIAE215",
        "categoryId": "01 - Teacher Lecture Notes & Slides",
        "categoryTitle": "01 - Teacher Lecture Notes & Slides",
        "title": "introduction",
        "filename": "introduction.pdf",
        "relativePath": "Miae 215/01 - Teacher Lecture Notes & Slides/introduction.pdf",
        "fileSizeBytes": 295502,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes & Slides",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: introduction"
      },
      {
        "id": "MIAE215_9",
        "courseId": "MIAE215",
        "categoryId": "01 - Teacher Lecture Notes & Slides",
        "categoryTitle": "01 - Teacher Lecture Notes & Slides",
        "title": "variable_types1",
        "filename": "variable_types1.pdf",
        "relativePath": "Miae 215/01 - Teacher Lecture Notes & Slides/variable_types1.pdf",
        "fileSizeBytes": 586620,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes & Slides",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: variable_types1"
      },
      {
        "id": "MIAE215_10",
        "courseId": "MIAE215",
        "categoryId": "01 - Teacher Lecture Notes & Slides",
        "categoryTitle": "01 - Teacher Lecture Notes & Slides",
        "title": "variable_types2",
        "filename": "variable_types2.pdf",
        "relativePath": "Miae 215/01 - Teacher Lecture Notes & Slides/variable_types2.pdf",
        "fileSizeBytes": 550857,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes & Slides",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: variable_types2"
      },
      {
        "id": "MIAE215_11",
        "courseId": "MIAE215",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 1 - C++ Foundations, Memory Architecture & Data Types",
        "filename": "Part 1 - C++ Foundations, Memory Architecture & Data Types.pdf",
        "relativePath": "Miae 215/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 1 - C++ Foundations, Memory Architecture & Data Types.pdf",
        "fileSizeBytes": 340762,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Part 1 - C++ Foundations, Memory Architecture & Data Types"
      },
      {
        "id": "MIAE215_12",
        "courseId": "MIAE215",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 2 - Type Casting, Modifiers, Control Flow & Algorithms",
        "filename": "Part 2 - Type Casting, Modifiers, Control Flow & Algorithms.pdf",
        "relativePath": "Miae 215/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 2 - Type Casting, Modifiers, Control Flow & Algorithms.pdf",
        "fileSizeBytes": 307587,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Part 2 - Type Casting, Modifiers, Control Flow & Algorithms"
      },
      {
        "id": "MIAE215_13",
        "courseId": "MIAE215",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 3 - Expressions, Operators & Math Library Functions",
        "filename": "Part 3 - Expressions, Operators & Math Library Functions.pdf",
        "relativePath": "Miae 215/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 3 - Expressions, Operators & Math Library Functions.pdf",
        "fileSizeBytes": 330262,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Part 3 - Expressions, Operators & Math Library Functions"
      },
      {
        "id": "MIAE215_14",
        "courseId": "MIAE215",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 4 - Control Statements, Logic Flow & Flowcharts",
        "filename": "Part 4 - Control Statements, Logic Flow & Flowcharts.pdf",
        "relativePath": "Miae 215/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 4 - Control Statements, Logic Flow & Flowcharts.pdf",
        "fileSizeBytes": 340330,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Part 4 - Control Statements, Logic Flow & Flowcharts"
      },
      {
        "id": "MIAE215_15",
        "courseId": "MIAE215",
        "categoryId": "03 - 1-Page Rapid Review Sheets",
        "categoryTitle": "03 - 1-Page Rapid Review Sheets",
        "title": "Part 1 - C++ Data Types, Sizes & Memory Limits - Review Sheet",
        "filename": "Part 1 - C++ Data Types, Sizes & Memory Limits - Review Sheet.pdf",
        "relativePath": "Miae 215/03 - 1-Page Rapid Review Sheets/Part 1 - C++ Data Types, Sizes & Memory Limits - Review Sheet.pdf",
        "fileSizeBytes": 146194,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "03 - 1-Page Rapid Review Sheets",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Part 1 - C++ Data Types, Sizes & Memory Limits - Review Sheet"
      },
      {
        "id": "MIAE215_16",
        "courseId": "MIAE215",
        "categoryId": "03 - 1-Page Rapid Review Sheets",
        "categoryTitle": "03 - 1-Page Rapid Review Sheets",
        "title": "Part 2 - C++ Operators, Casting & Control Flow - Review Sheet",
        "filename": "Part 2 - C++ Operators, Casting & Control Flow - Review Sheet.pdf",
        "relativePath": "Miae 215/03 - 1-Page Rapid Review Sheets/Part 2 - C++ Operators, Casting & Control Flow - Review Sheet.pdf",
        "fileSizeBytes": 135837,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "03 - 1-Page Rapid Review Sheets",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Part 2 - C++ Operators, Casting & Control Flow - Review Sheet"
      },
      {
        "id": "MIAE215_17",
        "courseId": "MIAE215",
        "categoryId": "03 - 1-Page Rapid Review Sheets",
        "categoryTitle": "03 - 1-Page Rapid Review Sheets",
        "title": "Part 3 - Expressions, Precedence & Math Library - Review Sheet",
        "filename": "Part 3 - Expressions, Precedence & Math Library - Review Sheet.pdf",
        "relativePath": "Miae 215/03 - 1-Page Rapid Review Sheets/Part 3 - Expressions, Precedence & Math Library - Review Sheet.pdf",
        "fileSizeBytes": 162612,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "03 - 1-Page Rapid Review Sheets",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Part 3 - Expressions, Precedence & Math Library - Review Sheet"
      },
      {
        "id": "MIAE215_18",
        "courseId": "MIAE215",
        "categoryId": "04 - Practice Problems & Code Solutions",
        "categoryTitle": "04 - Practice Problems & Code Solutions",
        "title": "Assignment 1 & Exercises - Fully Solved Master Guide",
        "filename": "Assignment 1 & Exercises - Fully Solved Master Guide.pdf",
        "relativePath": "Miae 215/04 - Practice Problems & Code Solutions/Assignment 1 & Exercises - Fully Solved Master Guide.pdf",
        "fileSizeBytes": 332817,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Practice Problems & Code Solutions",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Assignment 1 & Exercises - Fully Solved Master Guide"
      },
      {
        "id": "MIAE215_19",
        "courseId": "MIAE215",
        "categoryId": "04 - Practice Problems & Code Solutions",
        "categoryTitle": "04 - Practice Problems & Code Solutions",
        "title": "Assignment 2 & Week 3 In-Person Lecture Problems - Fully Solved Master Guide",
        "filename": "Assignment 2 & Week 3 In-Person Lecture Problems - Fully Solved Master Guide.pdf",
        "relativePath": "Miae 215/04 - Practice Problems & Code Solutions/Assignment 2 & Week 3 In-Person Lecture Problems - Fully Solved Master Guide.pdf",
        "fileSizeBytes": 237621,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Practice Problems & Code Solutions",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Assignment 2 & Week 3 In-Person Lecture Problems - Fully Solved Master Guide"
      },
      {
        "id": "MIAE215_20",
        "courseId": "MIAE215",
        "categoryId": "04 - Practice Problems & Code Solutions",
        "categoryTitle": "04 - Practice Problems & Code Solutions",
        "title": "Exercise Solutions Set 1 - Master Analysis & Teacher Commentary",
        "filename": "Exercise Solutions Set 1 - Master Analysis & Teacher Commentary.pdf",
        "relativePath": "Miae 215/04 - Practice Problems & Code Solutions/Exercise Solutions Set 1 - Master Analysis & Teacher Commentary.pdf",
        "fileSizeBytes": 190379,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Practice Problems & Code Solutions",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Exercise Solutions Set 1 - Master Analysis & Teacher Commentary"
      },
      {
        "id": "MIAE215_21",
        "courseId": "MIAE215",
        "categoryId": "04 - Practice Problems & Code Solutions",
        "categoryTitle": "04 - Practice Problems & Code Solutions",
        "title": "MIAE 215 - Step-by-Step Code Execution & Trace Manual",
        "filename": "MIAE 215 - Step-by-Step Code Execution & Trace Manual.pdf",
        "relativePath": "Miae 215/04 - Practice Problems & Code Solutions/MIAE 215 - Step-by-Step Code Execution & Trace Manual.pdf",
        "fileSizeBytes": 304779,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "04 - Practice Problems & Code Solutions",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: MIAE 215 - Step-by-Step Code Execution & Trace Manual"
      },
      {
        "id": "MIAE215_22",
        "courseId": "MIAE215",
        "categoryId": "05 - Software & Flowcharts",
        "categoryTitle": "05 - Software & Flowcharts",
        "title": "Q2_e",
        "filename": "Q2_e.pdf",
        "relativePath": "Miae 215/05 - Software & Flowcharts/Q2_e.pdf",
        "fileSizeBytes": 7974,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "05 - Software & Flowcharts",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Q2_e"
      },
      {
        "id": "MIAE215_23",
        "courseId": "MIAE215",
        "categoryId": "05 - Software & Flowcharts/CodeBlocks_17.12_portable/share/CodeBlocks/docs",
        "categoryTitle": "docs",
        "title": "codeblocks",
        "filename": "codeblocks.pdf",
        "relativePath": "Miae 215/05 - Software & Flowcharts/CodeBlocks_17.12_portable/share/CodeBlocks/docs/codeblocks.pdf",
        "fileSizeBytes": 1307089,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "docs",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: codeblocks"
      },
      {
        "id": "MIAE215_24",
        "courseId": "MIAE215",
        "categoryId": "06 - Arduino Labs & Term Project",
        "categoryTitle": "06 - Arduino Labs & Term Project",
        "title": "MIAE 215 - Arduino Labs & Mechatronics Project Master Guide",
        "filename": "MIAE 215 - Arduino Labs & Mechatronics Project Master Guide.pdf",
        "relativePath": "Miae 215/06 - Arduino Labs & Term Project/MIAE 215 - Arduino Labs & Mechatronics Project Master Guide.pdf",
        "fileSizeBytes": 258413,
        "isMasterGuide": true,
        "isHighYield": true,
        "tags": [
          "06 - Arduino Labs & Term Project",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: MIAE 215 - Arduino Labs & Mechatronics Project Master Guide"
      },
      {
        "id": "MIAE215_25",
        "courseId": "MIAE215",
        "categoryId": "06 - Arduino Labs & Term Project/00 - Lab Overview & Hardware Kit Guide",
        "categoryTitle": "00 - Lab Overview & Hardware Kit Guide",
        "title": "MIAE 215 - Week 3 Laboratory Briefing, Kit Logistics & Master Lab Schedule",
        "filename": "MIAE 215 - Week 3 Laboratory Briefing, Kit Logistics & Master Lab Schedule.pdf",
        "relativePath": "Miae 215/06 - Arduino Labs & Term Project/00 - Lab Overview & Hardware Kit Guide/MIAE 215 - Week 3 Laboratory Briefing, Kit Logistics & Master Lab Schedule.pdf",
        "fileSizeBytes": 116180,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "00 - Lab Overview & Hardware Kit Guide",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: MIAE 215 - Week 3 Laboratory Briefing, Kit Logistics & Master Lab Schedule"
      },
      {
        "id": "MIAE215_26",
        "courseId": "MIAE215",
        "categoryId": "06 - Arduino Labs & Term Project/00 - Lab Overview & Hardware Kit Guide",
        "categoryTitle": "00 - Lab Overview & Hardware Kit Guide",
        "title": "MIAE_215_arduino_kit_and_lab_policies",
        "filename": "MIAE_215_arduino_kit_and_lab_policies.pdf",
        "relativePath": "Miae 215/06 - Arduino Labs & Term Project/00 - Lab Overview & Hardware Kit Guide/MIAE_215_arduino_kit_and_lab_policies.pdf",
        "fileSizeBytes": 98815,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "00 - Lab Overview & Hardware Kit Guide",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: MIAE_215_arduino_kit_and_lab_policies"
      },
      {
        "id": "MIAE215_27",
        "courseId": "MIAE215",
        "categoryId": "06 - Arduino Labs & Term Project/Arduino Term Project - Guidelines & Sensor Modules",
        "categoryTitle": "Arduino Term Project - Guidelines & Sensor Modules",
        "title": "MIAE_215_arduino_project",
        "filename": "MIAE_215_arduino_project.pdf",
        "relativePath": "Miae 215/06 - Arduino Labs & Term Project/Arduino Term Project - Guidelines & Sensor Modules/MIAE_215_arduino_project.pdf",
        "fileSizeBytes": 75591,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "Arduino Term Project - Guidelines & Sensor Modules",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: MIAE_215_arduino_project"
      },
      {
        "id": "MIAE215_28",
        "courseId": "MIAE215",
        "categoryId": "06 - Arduino Labs & Term Project/Lab 1 - Introduction to Arduino & Software Setup",
        "categoryTitle": "Lab 1 - Introduction to Arduino & Software Setup",
        "title": "arduino_lab_1_instructions",
        "filename": "arduino_lab_1_instructions.pdf",
        "relativePath": "Miae 215/06 - Arduino Labs & Term Project/Lab 1 - Introduction to Arduino & Software Setup/arduino_lab_1_instructions.pdf",
        "fileSizeBytes": 175531,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Lab 1 - Introduction to Arduino & Software Setup",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: arduino_lab_1_instructions"
      },
      {
        "id": "MIAE215_29",
        "courseId": "MIAE215",
        "categoryId": "06 - Arduino Labs & Term Project/Lab 2 - Digital Input Output (DIO) & LED Sequencing",
        "categoryTitle": "Lab 2 - Digital Input Output (DIO) & LED Sequencing",
        "title": "arduino_lab_2",
        "filename": "arduino_lab_2.pdf",
        "relativePath": "Miae 215/06 - Arduino Labs & Term Project/Lab 2 - Digital Input Output (DIO) & LED Sequencing/arduino_lab_2.pdf",
        "fileSizeBytes": 338221,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Lab 2 - Digital Input Output (DIO) & LED Sequencing",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: arduino_lab_2"
      },
      {
        "id": "MIAE215_30",
        "courseId": "MIAE215",
        "categoryId": "06 - Arduino Labs & Term Project/Lab 3 - Sensors & Servo Actuators",
        "categoryTitle": "Lab 3 - Sensors & Servo Actuators",
        "title": "arduino_lab_3",
        "filename": "arduino_lab_3.pdf",
        "relativePath": "Miae 215/06 - Arduino Labs & Term Project/Lab 3 - Sensors & Servo Actuators/arduino_lab_3.pdf",
        "fileSizeBytes": 111968,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Lab 3 - Sensors & Servo Actuators",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: arduino_lab_3"
      },
      {
        "id": "MIAE215_31",
        "courseId": "MIAE215",
        "categoryId": "Mini Course",
        "categoryTitle": "Mini Course",
        "title": "MIAE 215 - C++ Getting Started Mini-Course Master Guide",
        "filename": "MIAE 215 - C++ Getting Started Mini-Course Master Guide.pdf",
        "relativePath": "Miae 215/Mini Course/MIAE 215 - C++ Getting Started Mini-Course Master Guide.pdf",
        "fileSizeBytes": 439511,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Mini Course",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: MIAE 215 - C++ Getting Started Mini-Course Master Guide"
      },
      {
        "id": "MIAE215_32",
        "courseId": "MIAE215",
        "categoryId": "Mini Course/00 - Overview & Troubleshooting",
        "categoryTitle": "00 - Overview & Troubleshooting",
        "title": "00 - Mini-Course Overview & Guidelines",
        "filename": "00 - Mini-Course Overview & Guidelines.pdf",
        "relativePath": "Miae 215/Mini Course/00 - Overview & Troubleshooting/00 - Mini-Course Overview & Guidelines.pdf",
        "fileSizeBytes": 75415,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "00 - Overview & Troubleshooting",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: 00 - Mini-Course Overview & Guidelines"
      },
      {
        "id": "MIAE215_33",
        "courseId": "MIAE215",
        "categoryId": "Mini Course/00 - Overview & Troubleshooting",
        "categoryTitle": "00 - Overview & Troubleshooting",
        "title": "01 - Mini-Course Troubleshooting Guide",
        "filename": "01 - Mini-Course Troubleshooting Guide.pdf",
        "relativePath": "Miae 215/Mini Course/00 - Overview & Troubleshooting/01 - Mini-Course Troubleshooting Guide.pdf",
        "fileSizeBytes": 112865,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "00 - Overview & Troubleshooting",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: 01 - Mini-Course Troubleshooting Guide"
      },
      {
        "id": "MIAE215_34",
        "courseId": "MIAE215",
        "categoryId": "Mini Course/Lesson 1 - Software Installation",
        "categoryTitle": "Lesson 1 - Software Installation",
        "title": "Lesson 1 - Software Installation & Setup Guide",
        "filename": "Lesson 1 - Software Installation & Setup Guide.pdf",
        "relativePath": "Miae 215/Mini Course/Lesson 1 - Software Installation/Lesson 1 - Software Installation & Setup Guide.pdf",
        "fileSizeBytes": 103668,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "Lesson 1 - Software Installation",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Lesson 1 - Software Installation & Setup Guide"
      },
      {
        "id": "MIAE215_35",
        "courseId": "MIAE215",
        "categoryId": "Mini Course/Lesson 2 - C++ Programs",
        "categoryTitle": "Lesson 2 - C++ Programs",
        "title": "Lesson 2 - C++ Programs & First Hello World",
        "filename": "Lesson 2 - C++ Programs & First Hello World.pdf",
        "relativePath": "Miae 215/Mini Course/Lesson 2 - C++ Programs/Lesson 2 - C++ Programs & First Hello World.pdf",
        "fileSizeBytes": 106454,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Lesson 2 - C++ Programs",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Lesson 2 - C++ Programs & First Hello World"
      },
      {
        "id": "MIAE215_36",
        "courseId": "MIAE215",
        "categoryId": "Mini Course/Lesson 3 - Variable Types",
        "categoryTitle": "Lesson 3 - Variable Types",
        "title": "Lesson 3 - Variable Types, Memory & Sizing",
        "filename": "Lesson 3 - Variable Types, Memory & Sizing.pdf",
        "relativePath": "Miae 215/Mini Course/Lesson 3 - Variable Types/Lesson 3 - Variable Types, Memory & Sizing.pdf",
        "fileSizeBytes": 103692,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Lesson 3 - Variable Types",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Lesson 3 - Variable Types, Memory & Sizing"
      },
      {
        "id": "MIAE215_37",
        "courseId": "MIAE215",
        "categoryId": "Mini Course/Lesson 4 - Expressions & Operators",
        "categoryTitle": "Lesson 4 - Expressions & Operators",
        "title": "Lesson 4 - Expressions, Operators & Precedence",
        "filename": "Lesson 4 - Expressions, Operators & Precedence.pdf",
        "relativePath": "Miae 215/Mini Course/Lesson 4 - Expressions & Operators/Lesson 4 - Expressions, Operators & Precedence.pdf",
        "fileSizeBytes": 94336,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Lesson 4 - Expressions & Operators",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Lesson 4 - Expressions, Operators & Precedence"
      },
      {
        "id": "MIAE215_38",
        "courseId": "MIAE215",
        "categoryId": "Mini Course/Lesson 5 - Control Statements",
        "categoryTitle": "Lesson 5 - Control Statements",
        "title": "Lesson 5 - Decision Logic, Branches & Loops",
        "filename": "Lesson 5 - Decision Logic, Branches & Loops.pdf",
        "relativePath": "Miae 215/Mini Course/Lesson 5 - Control Statements/Lesson 5 - Decision Logic, Branches & Loops.pdf",
        "fileSizeBytes": 99956,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Lesson 5 - Control Statements",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Lesson 5 - Decision Logic, Branches & Loops"
      },
      {
        "id": "MIAE215_39",
        "courseId": "MIAE215",
        "categoryId": "Mini Course/Lesson 6 - Arrays",
        "categoryTitle": "Lesson 6 - Arrays",
        "title": "Lesson 6 - Arrays & Numerical Processing",
        "filename": "Lesson 6 - Arrays & Numerical Processing.pdf",
        "relativePath": "Miae 215/Mini Course/Lesson 6 - Arrays/Lesson 6 - Arrays & Numerical Processing.pdf",
        "fileSizeBytes": 73160,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "Lesson 6 - Arrays",
          "MIAE 215"
        ],
        "summary": "Official curriculum document for MIAE 215: Lesson 6 - Arrays & Numerical Processing"
      }
    ]
  },
  {
    "id": "MIAE221",
    "code": "MIAE 221",
    "name": "Materials Science & Engineering",
    "department": "Department of Mechanical, Industrial and Aerospace Engineering",
    "term": "Fall 2026",
    "color": "rose",
    "gradient": "from-rose-500 via-pink-600 to-purple-600",
    "borderGlow": "rgba(244, 63, 94, 0.4)",
    "accentHex": "#f43f5e",
    "iconName": "Atom",
    "description": "Atomic bonding, crystallography, Miller indices, APF calculations, point defects, and material properties.",
    "totalDocuments": 16,
    "totalQuestions": 30,
    "categories": [
      {
        "id": "00 - Course Overview & Study Guide",
        "title": "00 - Course Overview & Study Guide",
        "count": 2,
        "description": "Course materials for 00 - Course Overview & Study Guide"
      },
      {
        "id": "01 - Teacher Lecture Notes",
        "title": "01 - Teacher Lecture Notes",
        "count": 6,
        "description": "Course materials for 01 - Teacher Lecture Notes"
      },
      {
        "id": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "count": 3,
        "description": "Course materials for 02 - Comprehensive Topic Guides (Expanded & Intuitive)"
      },
      {
        "id": "03 - 1-Page Rapid Review Sheets",
        "title": "03 - 1-Page Rapid Review Sheets",
        "count": 3,
        "description": "Course materials for 03 - 1-Page Rapid Review Sheets"
      },
      {
        "id": "04 - Practice Problems & Step-by-Step Solutions",
        "title": "04 - Practice Problems & Step-by-Step Solutions",
        "count": 2,
        "description": "Course materials for 04 - Practice Problems & Step-by-Step Solutions"
      }
    ],
    "documents": [
      {
        "id": "MIAE221_1",
        "courseId": "MIAE221",
        "categoryId": "00 - Course Overview & Study Guide",
        "categoryTitle": "00 - Course Overview & Study Guide",
        "title": "MIAE 221 - Master Study Guide & Exam Strategy",
        "filename": "MIAE 221 - Master Study Guide & Exam Strategy.pdf",
        "relativePath": "Miae 221/00 - Course Overview & Study Guide/MIAE 221 - Master Study Guide & Exam Strategy.pdf",
        "fileSizeBytes": 188351,
        "isMasterGuide": true,
        "isHighYield": true,
        "tags": [
          "00 - Course Overview & Study Guide",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: MIAE 221 - Master Study Guide & Exam Strategy"
      },
      {
        "id": "MIAE221_2",
        "courseId": "MIAE221",
        "categoryId": "00 - Course Overview & Study Guide",
        "categoryTitle": "00 - Course Overview & Study Guide",
        "title": "MIAE 221-X-2026-Course Outline",
        "filename": "MIAE 221-X-2026-Course Outline.pdf",
        "relativePath": "Miae 221/00 - Course Overview & Study Guide/MIAE 221-X-2026-Course Outline.pdf",
        "fileSizeBytes": 358173,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "00 - Course Overview & Study Guide",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: MIAE 221-X-2026-Course Outline"
      },
      {
        "id": "MIAE221_3",
        "courseId": "MIAE221",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "Practice Problem Set #1",
        "filename": "Practice Problem Set #1.pdf",
        "relativePath": "Miae 221/01 - Teacher Lecture Notes/Practice Problem Set #1.pdf",
        "fileSizeBytes": 271250,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: Practice Problem Set #1"
      },
      {
        "id": "MIAE221_4",
        "courseId": "MIAE221",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "lecture 1-introduction-2026-students (1)",
        "filename": "lecture 1-introduction-2026-students (1).pdf",
        "relativePath": "Miae 221/01 - Teacher Lecture Notes/lecture 1-introduction-2026-students (1).pdf",
        "fileSizeBytes": 516423,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: lecture 1-introduction-2026-students (1)"
      },
      {
        "id": "MIAE221_5",
        "courseId": "MIAE221",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "lecture 2-review chemistry-students26",
        "filename": "lecture 2-review chemistry-students26.pdf",
        "relativePath": "Miae 221/01 - Teacher Lecture Notes/lecture 2-review chemistry-students26.pdf",
        "fileSizeBytes": 780154,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "01 - Teacher Lecture Notes",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: lecture 2-review chemistry-students26"
      },
      {
        "id": "MIAE221_6",
        "courseId": "MIAE221",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "lecture 3-review chemistry 2-students26",
        "filename": "lecture 3-review chemistry 2-students26.pdf",
        "relativePath": "Miae 221/01 - Teacher Lecture Notes/lecture 3-review chemistry 2-students26.pdf",
        "fileSizeBytes": 710882,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "01 - Teacher Lecture Notes",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: lecture 3-review chemistry 2-students26"
      },
      {
        "id": "MIAE221_7",
        "courseId": "MIAE221",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "lecture 4-crystal structure 1-students26",
        "filename": "lecture 4-crystal structure 1-students26.pdf",
        "relativePath": "Miae 221/01 - Teacher Lecture Notes/lecture 4-crystal structure 1-students26.pdf",
        "fileSizeBytes": 762806,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: lecture 4-crystal structure 1-students26"
      },
      {
        "id": "MIAE221_8",
        "courseId": "MIAE221",
        "categoryId": "01 - Teacher Lecture Notes",
        "categoryTitle": "01 - Teacher Lecture Notes",
        "title": "lecture 5-crystal structure 2-students26",
        "filename": "lecture 5-crystal structure 2-students26.pdf",
        "relativePath": "Miae 221/01 - Teacher Lecture Notes/lecture 5-crystal structure 2-students26.pdf",
        "fileSizeBytes": 881173,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "01 - Teacher Lecture Notes",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: lecture 5-crystal structure 2-students26"
      },
      {
        "id": "MIAE221_9",
        "courseId": "MIAE221",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 1 - Materials Classes, Atomic Structure & Energy Curves",
        "filename": "Part 1 - Materials Classes, Atomic Structure & Energy Curves.pdf",
        "relativePath": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 1 - Materials Classes, Atomic Structure & Energy Curves.pdf",
        "fileSizeBytes": 255520,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: Part 1 - Materials Classes, Atomic Structure & Energy Curves"
      },
      {
        "id": "MIAE221_10",
        "courseId": "MIAE221",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 2 - Chemical Bonding, Potential Wells & Physical Properties",
        "filename": "Part 2 - Chemical Bonding, Potential Wells & Physical Properties.pdf",
        "relativePath": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 2 - Chemical Bonding, Potential Wells & Physical Properties.pdf",
        "fileSizeBytes": 234898,
        "isMasterGuide": false,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: Part 2 - Chemical Bonding, Potential Wells & Physical Properties"
      },
      {
        "id": "MIAE221_11",
        "courseId": "MIAE221",
        "categoryId": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "categoryTitle": "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
        "title": "Part 3 - Crystal Structures, Unit Cells & Crystallography Master Guide",
        "filename": "Part 3 - Crystal Structures, Unit Cells & Crystallography Master Guide.pdf",
        "relativePath": "Miae 221/02 - Comprehensive Topic Guides (Expanded & Intuitive)/Part 3 - Crystal Structures, Unit Cells & Crystallography Master Guide.pdf",
        "fileSizeBytes": 387869,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "02 - Comprehensive Topic Guides (Expanded & Intuitive)",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: Part 3 - Crystal Structures, Unit Cells & Crystallography Master Guide"
      },
      {
        "id": "MIAE221_12",
        "courseId": "MIAE221",
        "categoryId": "03 - 1-Page Rapid Review Sheets",
        "categoryTitle": "03 - 1-Page Rapid Review Sheets",
        "title": "Part 1 - Atomic Structure & Periodic Trends - One-Page Review Sheet",
        "filename": "Part 1 - Atomic Structure & Periodic Trends - One-Page Review Sheet.pdf",
        "relativePath": "Miae 221/03 - 1-Page Rapid Review Sheets/Part 1 - Atomic Structure & Periodic Trends - One-Page Review Sheet.pdf",
        "fileSizeBytes": 120243,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "03 - 1-Page Rapid Review Sheets",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: Part 1 - Atomic Structure & Periodic Trends - One-Page Review Sheet"
      },
      {
        "id": "MIAE221_13",
        "courseId": "MIAE221",
        "categoryId": "03 - 1-Page Rapid Review Sheets",
        "categoryTitle": "03 - 1-Page Rapid Review Sheets",
        "title": "Part 2 - Chemical Bonding & Potential Wells - One-Page Review Sheet",
        "filename": "Part 2 - Chemical Bonding & Potential Wells - One-Page Review Sheet.pdf",
        "relativePath": "Miae 221/03 - 1-Page Rapid Review Sheets/Part 2 - Chemical Bonding & Potential Wells - One-Page Review Sheet.pdf",
        "fileSizeBytes": 132901,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "03 - 1-Page Rapid Review Sheets",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: Part 2 - Chemical Bonding & Potential Wells - One-Page Review Sheet"
      },
      {
        "id": "MIAE221_14",
        "courseId": "MIAE221",
        "categoryId": "03 - 1-Page Rapid Review Sheets",
        "categoryTitle": "03 - 1-Page Rapid Review Sheets",
        "title": "Part 3 - Crystal Structures & Miller Indices - One-Page Review Sheet",
        "filename": "Part 3 - Crystal Structures & Miller Indices - One-Page Review Sheet.pdf",
        "relativePath": "Miae 221/03 - 1-Page Rapid Review Sheets/Part 3 - Crystal Structures & Miller Indices - One-Page Review Sheet.pdf",
        "fileSizeBytes": 138361,
        "isMasterGuide": false,
        "isHighYield": true,
        "tags": [
          "03 - 1-Page Rapid Review Sheets",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: Part 3 - Crystal Structures & Miller Indices - One-Page Review Sheet"
      },
      {
        "id": "MIAE221_15",
        "courseId": "MIAE221",
        "categoryId": "04 - Practice Problems & Step-by-Step Solutions",
        "categoryTitle": "04 - Practice Problems & Step-by-Step Solutions",
        "title": "MIAE 221 - Step-by-Step Quantitative Problem Guide",
        "filename": "MIAE 221 - Step-by-Step Quantitative Problem Guide.pdf",
        "relativePath": "Miae 221/04 - Practice Problems & Step-by-Step Solutions/MIAE 221 - Step-by-Step Quantitative Problem Guide.pdf",
        "fileSizeBytes": 327751,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Practice Problems & Step-by-Step Solutions",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: MIAE 221 - Step-by-Step Quantitative Problem Guide"
      },
      {
        "id": "MIAE221_16",
        "courseId": "MIAE221",
        "categoryId": "04 - Practice Problems & Step-by-Step Solutions",
        "categoryTitle": "04 - Practice Problems & Step-by-Step Solutions",
        "title": "Practice Problem Set #1 - Fully Solved Master Guide",
        "filename": "Practice Problem Set #1 - Fully Solved Master Guide.pdf",
        "relativePath": "Miae 221/04 - Practice Problems & Step-by-Step Solutions/Practice Problem Set #1 - Fully Solved Master Guide.pdf",
        "fileSizeBytes": 231075,
        "isMasterGuide": true,
        "isHighYield": false,
        "tags": [
          "04 - Practice Problems & Step-by-Step Solutions",
          "MIAE 221"
        ],
        "summary": "Official curriculum document for MIAE 221: Practice Problem Set #1 - Fully Solved Master Guide"
      }
    ]
  }
];

// Show study material only: hide assignment/lab files, solutions, the term paper, and any folder left empty.
export const COURSES_DATA: CourseWithDocs[] = RAW_COURSES_DATA.map((course) => {
  // CodeBlocks files are never copied into the build, so their links would be dead
  const documents = course.documents.filter(
    (d) => !isHiddenFromSite(d.relativePath) && !d.relativePath.includes('CodeBlocks')
  );
  const categories = course.categories
    .map((c) => ({ ...c, count: documents.filter((d) => d.categoryId === c.id).length }))
    .filter((c) => c.count > 0);
  return { ...course, categories, documents, totalDocuments: documents.length };
});
