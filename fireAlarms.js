// Define the parameters of the fire event
const FireParameter = () => {
    return {
  smoke : Math.random() * 10,
  Temperature :Math.random() * 100,
    }
};

// Send Alert Message if the condition is true

const sendAlertMessage = ({ smoke, Temperature }) => {
  if (smoke > 5 || Temperature > 60) {
    return {
      Alert: true,
      message: `Temperature is too high ${smoke.toFixed(
        1
      )} and ${Temperature.toFixed(1)} `,
    };
  }
  return {
    Alert: false,
    message: "Normal temperature and smokeLevel",
  };
};

// Some Instructions to mitigating the fire control
const MitigatingFireInstructions = ({ smoke, Temperature }) => {
  if (smoke > 5 && Temperature < 60) {
    return " Use Salt or Banking Soda or dry blanket or sand";
  } else if (Temperature > 60) {
    return {
      Alert: true,
      message: "Directly call the emergency ",
    };
  } else {
    return "There is no worries";
  }
};

//Check Real time of response
const realTimeRespond = () => {
  setInterval(() => {
    const fireCondition = FireParameter();
    const alert = sendAlertMessage(fireCondition);
    console.log("Alert message" + alert.message);

    if (alert.alert) {
      console.log(
        "Mitigation Instructions",
        MitigatingFireInstructions(fireCondition)
      );
    }
  }, 3*1000);
};

//Call the main function
realTimeRespond();
