
@properties.each do |property|
    json.set! property.id do #this sets an object and uses property.id as a key
        json.extract! property,
            :id,
            :address, 
            :agent_id, 
            :city, 
            :zipcode, 
            :st_prefix,
            :st_name,
            :st_suffix,
            :county,
            :state,
            :bed_count,
            :bath_count,
            :gla,
            :house_number,
            :st_prefix,
            :st_name,
            :st_suffix,
            :lot_area,
            :apn,
            :listing_id,
            :list_offer,
            :list_arv,
            :offer,
            :offer_text,
            :pipeline,
            :arv,
            :bac,
            :list_price,
            :created_at, 
            :updated_at, 
            :offer_date_dash
    end
end

