Fabricator(:user) do
  name { FFaker::Name.first_name }
  email { FFaker::Internet.free_email }
  password 'testing'
  password_confirmation 'testing'
end