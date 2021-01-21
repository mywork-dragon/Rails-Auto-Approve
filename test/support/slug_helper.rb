module SlugHelper
  def setup
    assert Fabricate(self.class.name.downcase.to_sym).slug
  end
end