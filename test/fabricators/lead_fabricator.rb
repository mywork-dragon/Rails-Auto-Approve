Fabricator(:lead) do
  landing

  first_name { FFaker::Name.first_name }
  last_name { FFaker::Name.last_name }
  email { FFaker::Internet.free_email }
  phone '206-222-3345'
  last_4_ssn '5543'
  date_of_birth { 20.years.ago }
  street1 '1508 10th Ave'
  city 'Seattle'
  state_code 'WA'
  zipcode 98122
  estimated_credit_score 800

  job_name 'Microsoft'
  job_title 'Software Engineer'
  job_wages '$10000'
  job_years 4
  job_months 1

  vehicle_make_id 1
  vehicle_make_name 'BMW'
  vehicle_model_id 1
  vehicle_model_name '2 Series'
  vehicle_year 2010
  vehicle_vin 'XXXXXXXXXXX'
  vehicle_make_name 'Honda'
  vehicle_mileage 1000
  vehicle_type { Mappings::VehicleTypes.types.sample }
  desired_term 72

  lien_name 'Citibank'
  lien_payment '$300'
  lien_payoff '$21000'
  lien_rate 4.1
end