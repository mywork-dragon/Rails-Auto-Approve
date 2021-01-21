Fabricator(:vehicle) do
  make { FFaker::Lorem.word }
  model { FFaker::Lorem.word }
end