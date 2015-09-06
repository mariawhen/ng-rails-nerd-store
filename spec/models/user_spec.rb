require 'rails_helper'

RSpec.describe User, type: :model do
  describe "#name" do
    it "returns a user's name" do
    maria = User.create(name: "maria")

    expect(maria.name).to equal("maria")
    end
  end
end
