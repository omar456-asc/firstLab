
// function Person(fullName,money,sleepMode ,healthRate) {
//   this.fullName = fullName;
//   this.money = money;
//   this.sleepMode = sleepMode;
//   this.healthRate = healthRate;
//   this.Sleep = function (hours) {
//     if(hours==7){
//         this.sleepMode="happy";
//     }
//     else if(hours > 7){
//         this.sleepMode="lazy";
//     }
//     else if(hours <7){
//         this.sleepMode="tired";
//     }
//        }
//        this.Eat = function (meals) {
//         if(meals==3){
//             this.healthRate="100";
//         }
//         else if(meals== 2){
//             this.healthRate="75";
//         }
//         else if(meals == 1){
//             this.healthRate="50";
//         }
// }
// this.Buy = function (items) {
//     if(items==1){
//         this.money-=10;
//     }
// }
// }
// const human = new Person("Omar Walid",100,"happy","100");
// human.Sleep(9);
// human.Buy(1);
// human.Eat(3);
// console.log(human);
// --------------------------------Class-----------------------
// class Person{
//     constructor(fullName,money,sleepMode,healthRate){
//     this.fullName = fullName;
//     this.money = money;
//     this.sleepMode = sleepMode;
//     this.healthRate = healthRate;
  

//     }
//     Sleep = function (hours) {
//             if(hours==7){
//                 this.sleepMode="happy";
//             }
//             else if(hours > 7){
//                 this.sleepMode="lazy";
//             }
//             else if(hours <7){
//                 this.sleepMode="tired";
//             }
//                }
//                Eat = function (meals) {
//                         if(meals==3){
//                             this.healthRate="100";
//                         }
//                         else if(meals== 2){
//                             this.healthRate="75";
//                         }
//                         else if(meals == 1){
//                             this.healthRate="50";
//                         }
//                 }
                
// Buy = function (items) {
//     if(items==1){
//         this.money-=10;
//     }
          
// }
// }
// const human = new Person("Omar Walid",100,"happy","100");
// human.Sleep(7);
// human.Buy(1);
// human.Eat(2);
// console.log(human);
//-----------------------------------OLOO----------------------------
const Person = {
         init(fullName,money,sleepMode,healthRate){
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = sleepMode;
        this.healthRate = healthRate;
        this.Sleep = function (hours) {
            if(hours==7){
                this.sleepMode="happy";
            }
            else if(hours > 7){
                this.sleepMode="lazy";
            }
            else if(hours <7){
                this.sleepMode="tired";
            }
               }
               this.Eat = function (meals) {
                        if(meals==3){
                            this.healthRate="100";
                        }
                        else if(meals== 2){
                            this.healthRate="75";
                        }
                        else if(meals == 1){
                            this.healthRate="50";
                        }
                }
                
this.Buy = function (items) {
    if(items==1){
        this.money-=10;
    }
    
  }
    return this;
        }
        
        
    }
    const human = Object.create(Person).init("Omar Walid",100,"happy","100");
human.Sleep(7);
human.Buy(1);
human.Eat(2);
console.log(human);
//---------------------------------Factory Function---------------------------
// function Person (fullName,money,sleepMode,healthRate) {
//       return {
//         fullName,
//         money,
//         sleepMode,
//         Buy(items) {
//             if(items==1){
//                 this.money-=10;
//             }
           
//         },
//         Sleep(hours) {
//                         if(hours==7){
//                             this.sleepMode="happy";
//                         }
//                         else if(hours > 7){
//                             this.sleepMode="lazy";
//                         }
//                         else if(hours <7){
//                             this.sleepMode="tired";
//                         }
//                            },
//                            Eat(meals) {
//                                     if(meals==3){
//                                         this.healthRate="100";
//                                     }
//                                     else if(meals== 2){
//                                         this.healthRate="75";
//                                     }
//                                     else if(meals == 1){
//                                         this.healthRate="50";
//                                     }
//                             },
                       
//         healthRate
//       }
      
// }
// const human = Person("Omar Walid",100,"happy","100");
// human.Buy(1);
// human.Sleep(1);
// human.Buy(1);
// human.Eat(2);
// console.log(human);   
