const mapping: Record<string, string> = {
  achievements: 'achievement',
  categories: 'category',
  communities: 'community',
  dashboards: 'dashboard',
  resources: 'resource',
  skills: 'skill',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
