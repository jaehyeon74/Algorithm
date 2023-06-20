function solution(cap, n, deliveries, pickups) {
  let dist = 0;
  const boxMap = new Map();
  for (let i = n - 1; i >= 0; i--) {
    const delivery = deliveries[i];
    const pickup = pickups[i];
    if (delivery > 0 || pickup > 0) boxMap.set(i + 1, [delivery, pickup]);
  }

  while (boxMap.size) {
    let deliverAmount = 0;
    let pickupAmount = 0;

    let maxDeliveryD = 0;
    let maxPickupD = 0;

    for (let [key, [beforeDelivery, beforePickUp]] of boxMap) {
      let updateDeliveryAmount = beforeDelivery;
      let updatePickupAmount = beforePickUp;

      if (deliverAmount == cap && pickupAmount == cap) break;
      if (beforeDelivery !== 0 && deliverAmount + beforeDelivery <= cap) {
        deliverAmount += beforeDelivery;
        updateDeliveryAmount = 0;
        maxDeliveryD = Math.max(maxDeliveryD, key);
      } else if (beforeDelivery !== 0 && deliverAmount + beforeDelivery > cap) {
        updateDeliveryAmount = beforeDelivery + deliverAmount - cap;
        deliverAmount = cap;
        maxDeliveryD = Math.max(maxDeliveryD, key);
      }

      if (beforePickUp !== 0 && pickupAmount + beforePickUp <= cap) {
        pickupAmount += beforePickUp;
        updatePickupAmount = 0;
        maxPickupD = Math.max(maxPickupD, key);
      } else if (beforePickUp !== 0 && pickupAmount + beforePickUp > cap) {
        updatePickupAmount = beforePickUp + pickupAmount - cap;
        pickupAmount = cap;
        maxPickupD = Math.max(maxPickupD, key);
      }

      if (updateDeliveryAmount == 0 && updatePickupAmount == 0) {
        boxMap.delete(key);
      } else {
        boxMap.set(key, [updateDeliveryAmount, updatePickupAmount]);
      }
    }

    dist += Math.max(maxDeliveryD, maxPickupD);
  }

  return dist * 2;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
