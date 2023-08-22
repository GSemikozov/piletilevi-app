type CreateApiRouteOptions = Record<string, unknown>;

export const createApiRoute = (route: string, options: CreateApiRouteOptions = {}) => {
  const optionsEntries = Object.entries(options);

  let resultRoute = route;

  optionsEntries.forEach(([key, value]) => {
    const parameter = ':' + key;

    if (resultRoute.search(parameter)) {
      resultRoute = resultRoute.replace(parameter, String(value));
    }
  });

  return resultRoute;
};
