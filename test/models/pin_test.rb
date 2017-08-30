# == Schema Information
#
# Table name: pins
#
#  id                 :integer          not null, primary key
#  pin_url            :string
#  author_id          :integer          not null
#  board_id           :integer          not null
#  description        :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  topic_id           :integer
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
