class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.string :show
      t.string :comments
      t.belongs_to :user
      t.timestamps
    end
  end
end
