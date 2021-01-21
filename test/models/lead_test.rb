require "test_helper"

describe Lead do
  context 'associations' do
    should belong_to(:landing)
    should belong_to(:vehicle)
  end

  context 'validations' do
    should_not allow_value(nil).for(:landing)
    should_not allow_value(nil).for(:vehicle)

    # Personal
    should allow_value('John').for(:first_name)
    should_not allow_value(nil).for(:first_name)
    should allow_value('Doe').for(:last_name)
    should_not allow_value(nil).for(:last_name)
    should allow_value('john@doe.org').for(:email)
    should_not allow_value(nil, 'invalid-email').for(:email)
    should allow_value('206-222-3345').for(:phone)
    should_not allow_value(nil, 'invalid-phone').for(:phone)
    should allow_value(1.year.ago).for(:date_of_birth)
    should allow_value('1508 10th Ave').for(:street1)
    should_not allow_value(nil).for(:street1)
    should allow_value(nil, '1508 10th Ave').for(:street2)
    should allow_value('Seattle').for(:city)
    should_not allow_value(nil).for(:city)
    should allow_value(*Mappings::States.codes).for(:state_code)
    should_not allow_value(nil, 'AA').for(:state_code)
    should allow_value('98371').for(:zipcode)
    should_not allow_value(nil).for(:zipcode)

    # Vehicle
    should allow_value(*Lead::VEHICLE_TYPES).for(:vehicle_type)
    should_not allow_value(nil, 'invalid-type').for(:vehicle_type)
    should allow_value(nil, 1000).for(:vehicle_mileage)
    should allow_value(2020).for(:vehicle_year)
    should_not allow_value(nil).for(:vehicle_year)
    should allow_value(nil, 'XXXXX').for(:vehicle_vin)

    # Employment
    should allow_value('Name').for(:job_name)
    should_not allow_value(nil).for(:job_name)
    should allow_value('Title').for(:job_title)
    should_not allow_value(nil).for(:job_title)
    should allow_value(0, 10).for(:job_years)
    should_not allow_value(nil, -1).for(:job_years)
    should allow_value(0, 11).for(:job_months)
    should_not allow_value(nil, -1, 12).for(:job_months)
    should allow_value(0, 1_000).for(:job_wages_cents)
    should_not allow_value(nil).for(:job_wages_cents)

    # Lienholder
    should allow_value(*Lead::DESIRED_TERMS).for(:desired_term)
    should_not allow_value(nil, 1000).for(:desired_term)
    should allow_value('Company name').for(:lien_name)
    should_not allow_value(nil).for(:lien_name)
    should allow_value(0, 5).for(:lien_rate)
    should_not allow_value(nil).for(:lien_rate)
  end
end
