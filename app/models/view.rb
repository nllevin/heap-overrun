# == Schema Information
#
# Table name: views
#
#  id          :bigint           not null, primary key
#  user_id     :integer
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class View < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :question
end
