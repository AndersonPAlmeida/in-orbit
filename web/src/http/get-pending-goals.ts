type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getSPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()

  return data.pendingGoals
}
