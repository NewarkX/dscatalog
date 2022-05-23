import { hasAnyHoles } from '../auth';
import * as TokenModule from '../token';

describe('hasAnyHoles tests', () => {

    test('should return true when empty list', () => {
        const result = hasAnyHoles([]);
        expect(result).toEqual(true);
    })

    test('should return true when user has given hole', () => {

        jest.spyOn(TokenModule, 'getTokenData').mockReturnValueOnce({
            exp: 0,
            user_name: '',
            authorities: ['ROLE_ADMIN', 'ROLE_OPERATOR'],
        })

        const result = hasAnyHoles(['ROLE_ADMIN']);
        expect(result).toEqual(true);
    })


    test('should return false when user does not have given hole', () => {

        jest.spyOn(TokenModule, 'getTokenData').mockReturnValueOnce({
            exp: 0,
            user_name: '',
            authorities: ['ROLE_OPERATOR'],
        })

        const result = hasAnyHoles(['ROLE_ADMIN']);
        expect(result).toEqual(false);
    })
})
