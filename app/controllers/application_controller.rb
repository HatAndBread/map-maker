class ApplicationController < ActionController::Base
  before_action :add_controller_action_names, except: %i[create update destroy]
  before_action :authenticate_user!

  private

  def add_controller_action_names
    @controller_action = "#{controller_name}##{action_name}"
    @model_name = controller_name.classify
  end
end
