class CreateFaqs < ActiveRecord::Migration[6.0]
  def change
    create_table :faqs do |t|
      t.text :question, null: false
      t.text :answer, null: false
      t.timestamps
    end
  end
end
