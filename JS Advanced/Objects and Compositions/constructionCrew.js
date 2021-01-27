function solve(worker = {}) {
    if (worker.dizziness === true) {
        worker.levelOfHydrated += worker.experience * (worker.weight * 0.1);
        worker.dizziness = false;
    }

    return worker;
}
console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));