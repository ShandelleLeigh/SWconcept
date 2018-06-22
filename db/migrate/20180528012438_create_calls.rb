class CreateCalls < ActiveRecord::Migration[5.1]
  def change
    create_table :calls do |t|
      t.string :client
      t.string :agent
      t.string :issue_type
      t.string :summary
      t.string :description
      t.boolean :accepted
      t.boolean :resolved

      t.timestamps
    end
  end
end
