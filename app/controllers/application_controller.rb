class ApplicationController < ActionController::Base
  def body_class(klass)
    @body_class = klass
  end
end
