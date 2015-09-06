require 'capybara'
require 'rails_helper'

RSpec.feature "Basic, unauthenticated, users", type: :feature do
  describe "can visit the home page" do
    it "gives a welcome message" do
      visit "/"
      expect(page.find("h1")).to have_content("Hello")
    end
  end
end
