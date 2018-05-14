class CreateCars < ActiveRecord::Migration[5.1]
  def change
    create_table :cars do |t|

      t.timestamps
      t.string :name
      t.string :price
      t.string :photo
      t.string :retailer
      t.string :kilometres
      t.string :exterior
      t.string :interior
      t.string :vin
      t.string :drivetrain
    end
  end
end
