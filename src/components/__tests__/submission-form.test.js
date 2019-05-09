import React from 'react';
import renderer from 'react-test-renderer';

//component being tested
import SubmissionForm from '../submission-form';

describe("submission form", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<SubmissionForm/>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    });
});