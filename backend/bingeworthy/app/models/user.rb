class User < ApplicationRecord
    has_many :shows
    validates :username, uniqueness: true

    validates :username, presence: true

    accepts_nested_attributes_for :shows

end
