
import { NotEmptyValidator } from '../../.tmp/main';

describe('NotEmptyValidator', function () {

    var notEmptyValidator;

    beforeEach(function () {
        notEmptyValidator = new NotEmptyValidator();

    });

    it ('should implement the IValidatorObject interface', function () {
        expect(notEmptyValidator).to.have.all.keys('name', 'defaultMessage', 'config');

        expect(notEmptyValidator.validate).to.be.defined;
    });

    it ('should treat undefined as invalid', function () {
        expect(notEmptyValidator.validate(void 0)).to.be.false;
        expect(notEmptyValidator.validate()).to.be.false;
    });

    it ('should treat empty strings as invalid', function () {
        expect(notEmptyValidator.validate('')).to.be.false;
    });

    it ('should ignore spaces in strings', function () {
        expect(notEmptyValidator.validate('  ')).to.be.false;
    });

    it ('should treat numbers as valid', function () {
        expect(notEmptyValidator.validate(20)).to.be.true;
    });

    it ('should treat the number 0 as a valid value', function () {
        expect(notEmptyValidator.validate(0)).to.be.true;
    });

    it ('should treat an empty object as invalid', function () {
        expect(notEmptyValidator.validate({})).to.be.false;
    });

    it ('should treat an empty array as invalid', function () {
        expect(notEmptyValidator.validate([])).to.be.false;
    });

    it ('should treat a string with at least one character as valid', function () {
        expect(notEmptyValidator.validate('d')).to.be.true;
    });

    it ('should treat objects with at least one property as valid', function () {
        expect(notEmptyValidator.validate({test: false})).to.be.true;
    });

    it ('should treat arrays with at least one object as valid', function () {
        expect(notEmptyValidator.validate(['test'])).to.be.true;
    });

});
