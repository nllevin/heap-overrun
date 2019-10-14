# == Schema Information
#
# Table name: votes
#
#  id           :bigint           not null, primary key
#  voter_id     :integer          not null
#  votable_id   :integer          not null
#  votable_type :string           not null
#  up           :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class VoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
