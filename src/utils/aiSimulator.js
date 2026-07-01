export function generatePrivacyNotice(formData) {
  return {
    title: `${formData.companyName || 'BrightLearn Academy'} Privacy Notice`,
    dataCollected: formData.dataCollected || 'Student profile, contact details, attendance, and payment status.',
    purpose: formData.purpose || 'To deliver learning services and manage student engagement.',
    consentStatement: `We collect and process your information with your informed consent for ${formData.purpose || 'service delivery'}.`,
    rights: 'You may request access, correction, deletion, or withdrawal of consent for your personal data.',
    withdrawal: 'You can withdraw consent at any time by contacting our support team.',
    retention: formData.retentionPeriod || 'We retain data for the period required to deliver services and meet legal obligations.',
    contact: `${formData.contactEmail || 'privacy@brightlearn.ai'} / ${formData.userRightsContact || 'grievance@brightlearn.ai'}`,
  };
}

export function generateRequestSuggestion(requestType) {
  switch (requestType) {
    case 'Deletion':
      return 'Verify identity, check retention rules, then process deletion.';
    case 'Access':
      return 'Prepare user data summary and verify request.';
    case 'Correction':
      return 'Validate updated information before correction.';
    case 'Withdraw Consent':
      return 'Stop future processing and confirm withdrawal logs.';
    case 'Grievance':
      return 'Assign grievance officer and respond within policy timeline.';
    default:
      return 'Route to the privacy operations workflow for review.';
  }
}

export function generateBreachSummary(incident) {
  const severity = incident.severity || 'Medium';
  const userCount = incident.affectedUsers || 0;
  return `AI Summary: This incident may affect ${incident.dataAffected || 'customer data'}. Recommended steps: restrict access, investigate the source, document the timeline, prepare user notification, and update security controls. Severity is ${severity} with ${userCount} affected users.`;
}

export function generateComplianceInsights() {
  return [
    'Consent withdrawal process needs improvement.',
    '2 rights requests are pending review.',
    'Privacy notice should mention data retention period.',
    'No critical breach open currently.',
  ];
}

export function classifyDataRisk(fieldName) {
  const lowered = fieldName.toLowerCase();
  if (['payment', 'bank', 'aadhaar', 'pan', 'health', 'medical'].some((token) => lowered.includes(token))) {
    return 'High';
  }
  if (['phone', 'email', 'parent', 'address'].some((token) => lowered.includes(token))) {
    return 'Medium';
  }
  return 'Low';
}
