import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
    const validProps = {
        results: [
          'https://images-assets.nasa.gov/image/PIA03606/PIA03606~thumb.jpg',
          'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000053/GSFC_20171208_Archive_e000053~thumb.jpg'
        ],
    };

    it("renders correctly", () => {
        const { asFragment } = render(
          <SearchResults
            results={validProps.results}
          />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});