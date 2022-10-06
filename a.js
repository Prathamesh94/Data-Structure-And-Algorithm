var prodid = [
  {
    "PID": "P10016",
    "identifier": {
      "value": "9015582955"
    },
    "billingType": "1",
    "type": "1",
    "customerFacingServices": [
      {
        "serviceType": "Z0003"
      },
      {
        "serviceType": "Z0002"
      }
    ],
    "characteristics": [
      {
        "name": "PRODUCT_STATE",
        "value": "DL"
      }
    ]
  },
  {
    "PID": "P10009",
    "identifier": {
      "value": "299939588358"
    },
    "billingType": "1",
    "type": "",
    "customerFacingServices": [
      {
        "serviceType": "Z0006"
      }
    ],
    "characteristics": [
      {
        "name": "PRODUCT_STATE",
        "value": "DL"
      }
    ]
  }
]
var pidflag = false
//prodid = JSON.stringify(prodid)
prodid.forEach((element, index, array) => {
    var pid = element.PID;
    
    console.log(pid)
    Object.entries(pid).forEach(([key, value]) => {
      console.log("second",pid)
        if (pid == "P10016") {
            pidflag = true;
          
        }
    });
});

console.log(pidflag)