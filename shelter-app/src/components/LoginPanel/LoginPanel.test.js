import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { MemoryRouter as Router } from "react-router-dom";
import { IntlProviderWrapper } from "../../IntlContext";
import { ThemeProviderWrapper } from "../../ThemeContext";

import LoginPanel from "./LoginPanel";

describe("[LOGIN PANEL COMPONENT] -", () => {
  describe("[RENDER] -", () => {
    it("should render initial component", () => {
      const wrapper = mount(
        <ThemeProviderWrapper>
          <IntlProviderWrapper>
            <Router keyLength={0}>
              <LoginPanel />
            </Router>
          </IntlProviderWrapper>
        </ThemeProviderWrapper>
      );
      expect(toJson(wrapper.find(LoginPanel))).toMatchSnapshot();
    });
  });

  describe("[SIMULATE] -", () => {
    it("should simulate the submit state component", () => {
      const handleSubmit = jest.fn();
      const wrapper = mount(
        <ThemeProviderWrapper>
          <IntlProviderWrapper>
            <Router keyLength={0}>
              <LoginPanel onSubmit={handleSubmit} />
            </Router>
          </IntlProviderWrapper>
        </ThemeProviderWrapper>
      );

      const email = wrapper.find('input[name="email"]');
      const password = wrapper.find('input[name="password"]');

      email.instance().value = "emailTest123@test.com";
      email.simulate("change", email);
      email.simulate("blur");

      password.instance().value = "aaAA12";
      password.simulate("change", password);
      password.simulate("blur");

      wrapper.find("form").simulate("submit");

      expect(handleSubmit).toHaveBeenCalled();
    });

    it("should simulate not the submit state component when email is wrong", () => {
      const handleSubmit = jest.fn();
      const wrapper = mount(
        <ThemeProviderWrapper>
          <IntlProviderWrapper>
            <Router keyLength={0}>
              <LoginPanel
                onSubmit={handleSubmit}
              />
            </Router>
          </IntlProviderWrapper>
        </ThemeProviderWrapper>
      );

      const email = wrapper.find('input[name="email"]');
      const password = wrapper.find('input[name="password"]');

      email.instance().value = "email.test";
      email.simulate("change", email);
      email.simulate("blur");

      password.instance().value = "aaAA12";
      password.simulate("change", password);
      password.simulate("blur");

      wrapper.find("form").simulate("submit");

      expect(handleSubmit).not.toHaveBeenCalled();
    });
  });
});
