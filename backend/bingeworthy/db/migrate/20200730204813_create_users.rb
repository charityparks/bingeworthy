class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :show
      t.string :comments

      t.timestamps
    end
  end
end
