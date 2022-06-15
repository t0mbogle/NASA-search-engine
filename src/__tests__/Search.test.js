import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
    const validProps = {
        setSearchResults: () => {},
    }

    it("renders correctly", () => {
        const { asFragment } = render(
          <Search 
            setSearchResults={validProps.setSearchResults}
          />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});