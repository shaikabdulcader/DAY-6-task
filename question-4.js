class UberPriceCalculator {
    constructor() {
      this.baseFare = 2.5;
      this.perMileRate = 1.75;
      this.perMinuteRate = 0.3;
    }
  
    calculatePrice(distance, duration) {
      const fare = this.baseFare + this.perMileRate * distance + this.perMinuteRate * duration;
      return fare;
    }
  }
  
  const uberCalculator = new UberPriceCalculator();
  
  const distanceInMiles = 10;
  const durationInMinutes = 15;
  
  const totalPrice = uberCalculator.calculatePrice(distanceInMiles, durationInMinutes);
  
  console.log(`Uber Price: $${totalPrice.toFixed(2)}`);
  