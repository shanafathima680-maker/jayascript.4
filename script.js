// var customer = {
//     Name : "Shana",
//     Age : 20,
//     AccountType : "savings",
//     Balance : 50000,
//     Transactions:[5000 , -2000,3000,-1500]
// }
// customer.Transactions.push(10000)
// customer.Balance = customer.Balance + 10000

// customer.Transactions.push(7000)
// customer.Balance = customer.Balance -7000


// customer.Transactions.pop()
// customer.Balance = customer.Balance +7000

// customer.Transactions.push(15000)
// customer.Balance = customer.Balance + 15000

// var totalDeposit = 10000 + 5000 + 15000 + 3000

// var totalWithdrawals = 2000  + 1500 

// var numberTransation = customer.Transactions.length 

// var netTranactionAmount = customer.Balance

// console.log(totalDeposit)
// console.log(totalWithdrawals)
// console.log(numberTransation)
// console.log(netTranactionAmount)

// var withdrawal = prompt("Enter the withdrawal amount")

// if(withdrawal >= 0){
//     if(withdrawal<=customer.Balance){
//         if(customer.Age>=18){
//             if(customer.Balance-withdrawal<10000){
//                 console.log("Warning Balance less then 10000")
//                 customer.Balance = customer.Balance-withdrawal
//                 totalWithdrawals = totalWithdrawals+withdrawal
//                 customer.Transactions.push(-withdrawal)
//                 console.log("Balance amount:",customer.Balance)
                
//             }else{
//                 customer.Balance = customer.Balance-withdrawal
//                  totalWithdrawals = totalWithdrawals+withdrawal
//                 customer.Transactions.push(-withdrawal)
//                 console.log("Balance amount:",customer.Balance)

//             }
//         }else{
//             console.log("Age Must be 18")
//         }

//     }else{
//         console.log("Balance is less than withdrawaal")
//     }
// }else{
//     console.log("enter a amount Greater than zero")
// }



// if (customer.Balance >= 75000){
//     console.log("Premium Customer")
//     customer.AccountStatus = "Premium Customer"
// }else if (customer.Balance >= 40000){
//     console.log("Standard Customer")
//     customer.AccountStatus = "Standard Customer"
// }else if (customer.Balance >= 10000){
//     console.log(" Basic Customer")
//     customer.AccountStatus = "Basic Customer"
// }else{
//     console.log(" Low Balance ")
// }



// if (customer.Balance >=50000 && customer.Age >= 21){
//     console.log("Customer have Premium Benefits")
// }else if (totalDeposit>=20000 || customer.Balance >=75000 ){
//     console.log(" Special Deposit Offer")}
//     else if (customer.Age < 18 || customer.Balance <0 ){
//     console.log("security alert")}
var customer={
    name:"Shana",
    age:21,
    membership:"Premium",
    roomtypes:["deluxe","standard","suits"],
    roomprices:[3000,2000,5000],
    numbernights:[2,3,1], 
    bookedroom:[1,2,3,4,5]
}
console.log(customer)
customer.roomtypes.push("executive")
console.log(customer.roomtypes)
customer.roomprices.push(4000)
console.log(customer.roomprices)
customer.numbernights.push(2)
console.log(customer.numbernights)
customer.roomtypes.push("family")
console.log(customer.roomtypes)
customer.roomprices.push(6000)
console.log(customer.numbernights)
console.log(customer.roomprices)
customer.numbernights.push(2)

customer.roomtypes.pop()
customer.roomprices.pop()
customer.numbernights.pop()
customer.roomtypes.push("luxuary")
console.log(customer.roomtypes)
customer.roomprices.push(8000)
customer.numbernights.push(3)
console.log(customer.roomprices)
console.log(customer.roomtypes)
console.log(customer.roomprices)
console.log(customer.numbernights)
var deluxe=(customer.roomprices[0]*customer.numbernights[0])
console.log(deluxe)
var standard=(customer.roomprices[1]*customer.numbernights[1])
console.log(standard)
var suits=(customer.roomprices[2]*customer.numbernights[2])
console.log(suits)
var executive=(customer.roomprices[3]*customer.numbernights[3])
console.log(executive)
var luxuary=(customer.roomprices[4]*customer.numbernights[4])
console.log(luxuary)
var totalroom=(deluxe+standard+suits+executive+luxuary)
console.log(totalroom)
var totalnumroom=(customer.bookedroom[0]+customer.bookedroom[1]+customer.bookedroom[2]+customer.bookedroom[3]+customer.bookedroom[4])
console.log(totalnumroom)
var avg=(totalroom/5)
console.log(avg)
console.log(customer.numbernights[0]+customer.numbernights[1]+customer.numbernights[2]+customer.numbernights[3]+customer.numbernights[4])

if(totalroom>=30000&&customer.membership=="Premium"){
    console.log("20% discount");
    var discount =(totalroom*20)/100
    var fb=(totalroom-discount)
    console.log(fb);
    
    
}else if(totalroom>=20000){
    console.log("15% discount");
    var discount=(totalroom*15)/100
    var fb=(totalroom-discount)
    console.log(fb);
   
    
    
}else if(totalroom>=10000){
    console.log("10% discount");
    var discount=(totalroom*10)/100
    var fb=(totalroom-discount)
    console.log(fb);
    
    
}else{
    console.log("no discount is applied");
    
}

var sercharge=(fb*5)/100
var fixedm=(fb+500)
var payment=(sercharge+fixedm)
console.log(sercharge);
console.log(fixedm);
console.log(payment);


if(customer.membership=="Premium"&&payment>=25000){
    console.log("Free Breakfast Eligibility");
    
}else if(customer.membership=="Premium"&&customer.numbernights>=4){
    console.log("Free Airport Pickup");
    
}else if(customer.age>=25&&customer.numbernights>=6){
    console.log("Special Customer Offer");
    
}else if(payment>40000||customer.numbernights[4]){
    console.log("Luxury Booking Alert");
    
}













































