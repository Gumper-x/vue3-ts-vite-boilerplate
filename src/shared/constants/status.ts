export enum SolverJobStatus {
  STARTED = "STARTED",
  FIRST_SOLUTION_FOUND = "FIRST_SOLUTION_FOUND",
  FINISHED = "FINISHED",
  FAILED = "FAILED",
  CANCELED = "CANCELED",
  PENDING = "PENDING",
}

export enum ObjectiveFunction {
  MinimizeMakeSpan = "MinimizeMakeSpan",
  MinimizeOrderOverduePenalty = "MinimizeOrderOverduePenalty",
  MinimizeTotalPenalty = "MinimizeTotalPenalty",
  MinimizeChageoverDuration = "MinimizeChageoverDuration",
  MinimizeChageoversPrice = "MinimizeChageoversPrice",
  MinimizeChageoversPenalty = "MinimizeChageoversPenalty",
  MinimizeWIPLyingDuration = "MinimizeWIPLyingDuration",
  MinimizeWIPLyingPrice = "MinimizeWIPLyingPrice",
  MinimizeWIPLyingPenalty = "MinimizeWIPLyingPenalty",
  MinimizeIdleDuration = "MinimizeIdleDuration",
  MinimizeIdlePrice = "MinimizeIdlePrice",
  MinimizeIdlePenalty = "MinimizeIdlePenalty",
}

export enum SolutionStatus {
  UNKNOWN = "UNKNOWN",
  MODEL_INVALID = "MODEL_INVALID",
  FEASIBLE = "FEASIBLE",
  INFEASIBLE = "INFEASIBLE",
  OPTIMAL = "OPTIMAL",
}

export enum StatusFilter {
  Active = "ACTIVE",
  Completion = "COMPLETION",
}
