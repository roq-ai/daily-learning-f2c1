interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: [],
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Member'],
  tenantName: 'Dashboard',
  applicationName: 'daily learning',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
