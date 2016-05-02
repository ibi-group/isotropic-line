import {
    describe,
    it
} from 'mocha';

import {
    expect
} from 'chai';

import line from '../js/line.js';

describe('line', () => {
    it('should return the current line number', () => {
        expect(line()).to.equal(14);
    });

    it('should return the line number of previous stack frames', () => {
        const a = () => [
                line(0),
                line(1),
                line(2),
                line(3),
                line(4)
            ],
            b = () => a(),
            c = () => {
                const result = b();

                return result;
            },
            d = {
                d () {
                    return c();
                }
            };

        expect(d.d()).to.deep.equal([
            19,
            25,
            27,
            33,
            37
        ]);
    });
});
