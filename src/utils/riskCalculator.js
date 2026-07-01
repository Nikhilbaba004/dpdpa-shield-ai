export function calculateComplianceScore(data) {
  const completed = data.checklistItems?.filter((item) => item.status === 'Completed').length || 0;
  const pending = data.checklistItems?.filter((item) => item.status === 'Pending').length || 0;
  const highRisk = data.checklistItems?.filter((item) => item.status === 'High Risk').length || 0;
  const baseScore = 70;
  const checklistBonus = (completed / 10) * 20;
  const pendingPenalty = pending * 1.5;
  const highRiskPenalty = highRisk * 3;
  const score = Math.max(40, Math.min(100, Math.round(baseScore + checklistBonus - pendingPenalty - highRiskPenalty)));

  return {
    score,
    completed,
    pending,
    highRisk,
  };
}

export function getRiskLevel(score) {
  if (score >= 85) return 'Low';
  if (score >= 70) return 'Medium';
  return 'High';
}

export function calculateChecklistProgress(items) {
  const completed = items.filter((item) => item.status === 'Completed').length;
  const pending = items.filter((item) => item.status === 'Pending').length;
  const highRisk = items.filter((item) => item.status === 'High Risk').length;
  const percentage = Math.round((completed / items.length) * 100);

  return { completed, pending, highRisk, percentage };
}
