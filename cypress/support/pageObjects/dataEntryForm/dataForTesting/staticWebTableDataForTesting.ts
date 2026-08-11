import type { StaticWebTableDataForTestingInterface } from "../interfaces/staticWebTableInterface.js";

export const staticWebTableDataForTesting: StaticWebTableDataForTestingInterface = {
  staticWebTable : [{
              bookName: "Learn Selenium",
              author: "Amit",
              subject: "Selenium",
              price: 300 
            },
            {
              bookName: "Learn Java",
              author: "Mukesh",
              subject: "Java",
              price: 500 
            },
            {
              bookName: "Learn JS",
              author: "Animesh",
              subject: "Javascript",
              price: 300
            },
            {
              bookName: "Master In Selenium",
              author: "Mukesh",
              subject: "Selenium",
              price: 3000  
            }, 
            {
              bookName: "Master In Java",
              author: "Amod",
              subject: "JAVA",
              price: 2000  
            }, 
            {
              bookName: "Master In JS",
              author: "Amit",
              subject: "Javascript",
              price: 1000  
            },             
          ]
} as const

