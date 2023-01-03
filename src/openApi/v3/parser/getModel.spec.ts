import { OpenApi } from '../interfaces/OpenApi';
import { OpenApiSchema } from '../interfaces/OpenApiSchema';
import { getModel } from './getModel';

describe('getModel', () => {
    it('should get an object model when type is missing but properties exist', () => {
        const openApi: OpenApi = {
            openapi: '3.0.1',
            info: { title: 'OpenApi Test', version: '0.1.0' },
            paths: {},
        };
        const definition: OpenApiSchema = {
            properties: {
                data: {
                    type: 'string',
                },
            },
        };

        const model = getModel(openApi, definition);
        expect(model.properties[0].name).toBe('data');
    });
});
