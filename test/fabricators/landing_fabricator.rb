Fabricator(:landing) do
  theme { Theme.available.sample }
  path "/some/path/here"
  config { Hash.new }
end