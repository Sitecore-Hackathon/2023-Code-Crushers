import { constants, GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import { GetDatasourceDocument } from './GetDatasource.graphql';

export async function getDatasource(guid) {
  if (process.env.JSS_MODE === constants.JSS_MODE.DISCONNECTED) {
    return null;
  }

  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  const result = await graphQLClient.request(GetDatasourceDocument, {
    datasourceId: guid,
    language: 'en',
  });

  const objArray = result.dataSource.fields.map((field) => {
    const obj = {};
    obj[field.name] = field.jsonValue;
    return obj;
  });

  const model = {};
  objArray.forEach((obj) => {
    Object.assign(model, obj);
  });

  return model;
}
