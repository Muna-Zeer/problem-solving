class Heart {
  constructor() {
    this.leftAtrium = 0;
    this.rightAtrium = 0;
    this.leftVentricle = 0;
    this.rightVentricle = 0;
    this.heartBeat = 0;
  }

  /**
   * Represent the blood comes into the heart's Atrium
   */
  atriaFill() {
    this.leftAtrium = "Oxygenated blood is coming from lungs";
    this.rightAtrium = "Deoxygenated comes from the body";
    console.log("Both of these atrium are filled");
  }
  /**
   * Represent the blood pushes into ventricles from the Atria
   */
  atriaPush() {
    this.leftVentricle = this.leftAtrium;
    this.rightVentricle = this.rightAtrium;
    this.leftAtrium = "Empty";
    this.rightAtrium = "Empty";
    console.log("Atria pushed blood into ventricles of the heart");
  }
  /**
   * Ventricles pumps blood to body and lungs
   */
  ventriclesPumps() {
    console.log("Left ventricles pumps" + this.leftVentricle + " to the body");
    console.log(
      "Right ventricles pumps" + this.rightVentricle + "to the lungs"
    );
    this.leftVentricle = "Empty";
    this.rightVentricle = "Empty";
    this.heartBeat++;
  }
  /**
   * Full works of heart beating
   */
  heartBeating() {
    this.atriaFill();
    this.atriaPush();
    this.ventriclesPumps();
    console.log("Heart beats counting" + this.heartBeat);
  }

  /**
   * Describe the status of the heart beating if normal or abnormal
   */
  heartBeatCounting(num){
    if(num >= 60 && num <= 100){
        return "Normal Status";
    }
    else {
        return "Abnormal Status";
    }
  }

}
/*
 *Simulate how heart works
 **/
let heart = new Heart();
// Determine the time work over one second
setInterval(() => {
  heart.heartBeating();
}, 1000);

console.log("Heart beating status "+heart.heartBeatCounting(72));
console.log("Heart beating status "+heart.heartBeatCounting(40));
console.log("Heart beating status "+heart.heartBeatCounting(120));


