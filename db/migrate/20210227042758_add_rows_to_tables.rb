class AddRowsToTables < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :offer_date_dash, :string
  end
end