export const stats = [
  { title: 'Total Consents', value: '2,840', change: '+12.4%', tone: 'blue' },
  { title: 'Active Consents', value: '2,410', change: '+8.2%', tone: 'emerald' },
  { title: 'Withdrawn Consents', value: '186', change: '-2.1%', tone: 'amber' },
  { title: 'Pending Requests', value: '24', change: '+4', tone: 'rose' },
  { title: 'Breach Incidents', value: '3', change: '+1', tone: 'violet' },
  { title: 'Compliance Score', value: '82/100', change: '+3', tone: 'emerald' },
  { title: 'High Risk Items', value: '7', change: '-1', tone: 'rose' },
  { title: 'Reports Generated', value: '18', change: '+5', tone: 'blue' },
];

export const consents = [
  {
    id: 1,
    name: 'Aarav Mehta',
    email: 'aarav@example.com',
    consentType: 'Marketing',
    purpose: 'Course updates',
    status: 'Active',
    date: '2026-06-01',
  },
  {
    id: 2,
    name: 'Nisha Rao',
    email: 'nisha@example.com',
    consentType: 'Analytics',
    purpose: 'Learning insights',
    status: 'Withdrawn',
    date: '2026-05-19',
  },
  {
    id: 3,
    name: 'Karan Singh',
    email: 'karan@example.com',
    consentType: 'Communication',
    purpose: 'Parent alerts',
    status: 'Pending',
    date: '2026-06-26',
  },
];

export const rightsRequests = [
  {
    id: 1,
    user: 'Isha Khanna',
    email: 'isha@example.com',
    requestType: 'Deletion',
    priority: 'High',
    status: 'In Review',
    submittedDate: '2026-06-24',
    dueDate: '2026-06-28',
    aiAction: 'Verify identity, check retention rules, then process deletion.',
  },
  {
    id: 2,
    user: 'Rohan Bhatia',
    email: 'rohan@example.com',
    requestType: 'Access',
    priority: 'Medium',
    status: 'Pending',
    submittedDate: '2026-06-25',
    dueDate: '2026-06-29',
    aiAction: 'Prepare user data summary and verify request.',
  },
];

export const breachIncidents = [
  {
    id: 1,
    title: 'Student portal export exposure',
    dataAffected: 'Contact details',
    affectedUsers: 320,
    severity: 'Medium',
    status: 'Investigating',
    actionTaken: 'Access restricted and logs reviewed',
  },
  {
    id: 2,
    title: 'CRM sync delay anomaly',
    dataAffected: 'Attendance and profile data',
    affectedUsers: 1250,
    severity: 'High',
    status: 'Resolved',
    actionTaken: 'Reconciled sync and notified admin',
  },
];

export const auditLogs = [
  {
    time: '09:40',
    user: 'Nikhil Sharma',
    action: 'Generated privacy notice',
    module: 'Notice',
    risk: 'Medium',
  },
  {
    time: '11:10',
    user: 'Maya Verma',
    action: 'Created deletion request',
    module: 'Rights',
    risk: 'High',
  },
  {
    time: '14:25',
    user: 'Ritika Singh',
    action: 'Updated consent record',
    module: 'Consent',
    risk: 'Low',
  },
  {
    time: '16:05',
    user: 'Ravi Kulkarni',
    action: 'Reviewed breach incident',
    module: 'Breach',
    risk: 'High',
  },
  {
    time: '17:20',
    user: 'Nikhil Sharma',
    action: 'Generated compliance report',
    module: 'Reports',
    risk: 'Medium',
  },
];

export const checklistItems = [
  {
    id: 1,
    title: 'Privacy notice created',
    description: 'A clear notice for learners and parents is updated on the portal.',
    status: 'Completed',
    module: 'Notice',
    action: 'Keep notice versioned and reviewed monthly.',
  },
  {
    id: 2,
    title: 'Consent records maintained',
    description: 'Every consent event is logged with purpose and timestamp.',
    status: 'Completed',
    module: 'Consent',
    action: 'Add consent renewal reminders for students.',
  },
  {
    id: 3,
    title: 'Consent withdrawal option available',
    description: 'Users can withdraw consent from all communication flows.',
    status: 'Pending',
    module: 'Consent',
    action: 'Add a one-click withdrawal banner in the portal.',
  },
  {
    id: 4,
    title: 'Data access request workflow ready',
    description: 'A standard process exists for access requests.',
    status: 'Completed',
    module: 'Rights',
    action: 'Track SLA performance weekly.',
  },
  {
    id: 5,
    title: 'Data correction workflow ready',
    description: 'Users can request corrections through a verified workflow.',
    status: 'Pending',
    module: 'Rights',
    action: 'Add field-level validation to improve quality.',
  },
  {
    id: 6,
    title: 'Data deletion workflow ready',
    description: 'Deletion requests are routed to the compliance team.',
    status: 'High Risk',
    module: 'Rights',
    action: 'Review retention exceptions and backup retention policy.',
  },
  {
    id: 7,
    title: 'Grievance contact added',
    description: 'A grievance officer contact is visible in the privacy notice.',
    status: 'Completed',
    module: 'Notice',
    action: 'Share escalation matrix with support teams.',
  },
  {
    id: 8,
    title: 'Breach response process ready',
    description: 'Your incident response playbook is documented.',
    status: 'Completed',
    module: 'Breach',
    action: 'Run a scenario drill with the security team.',
  },
  {
    id: 9,
    title: 'Audit logs enabled',
    description: 'System events are recorded for admin and data handling actions.',
    status: 'Pending',
    module: 'Audit',
    action: 'Enable tamper-evident export for quarterly audits.',
  },
  {
    id: 10,
    title: 'Monthly compliance report generated',
    description: 'A monthly compliance report is created for leadership review.',
    status: 'Completed',
    module: 'Reports',
    action: 'Publish comparator metrics to the board pack.',
  },
];

export const dataInventory = [
  {
    id: 1,
    fieldName: 'Student Name',
    category: 'Personal Data',
    purpose: 'Admission',
    storageLocation: 'CRM',
    riskLevel: 'Low',
  },
  {
    id: 2,
    fieldName: 'Phone Number',
    category: 'Contact Data',
    purpose: 'Communication',
    storageLocation: 'CRM',
    riskLevel: 'Medium',
  },
  {
    id: 3,
    fieldName: 'Parent Contact',
    category: 'Contact Data',
    purpose: 'Emergency updates',
    storageLocation: 'CRM',
    riskLevel: 'Medium',
  },
  {
    id: 4,
    fieldName: 'Payment Status',
    category: 'Financial Related Data',
    purpose: 'Fee tracking',
    storageLocation: 'Billing System',
    riskLevel: 'High',
  },
  {
    id: 5,
    fieldName: 'Attendance',
    category: 'Academic Data',
    purpose: 'Performance tracking',
    storageLocation: 'LMS',
    riskLevel: 'Medium',
  },
];

export const aiInsights = [
  'Consent withdrawal process needs improvement.',
  '2 rights requests are pending review.',
  'Privacy notice should mention data retention period.',
  'No critical breach open currently.',
];

export const companyProfile = {
  companyName: 'BrightLearn Academy',
  industry: 'EdTech',
  adminName: 'Nikhil Sharma',
  adminEmail: 'nikhil@brightlearn.ai',
  dpoName: 'Maya Verma',
  dpoEmail: 'dpo@brightlearn.ai',
  grievanceOfficerName: 'Ravi Kulkarni',
  grievanceEmail: 'grievance@brightlearn.ai',
  businessAddress: '12, Innovation Park, Bengaluru, Karnataka',
};
