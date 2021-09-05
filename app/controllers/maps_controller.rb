class MapsController < ApplicationController
  before_action :use_react, only: %i[new edit]
  before_action :fetch_map, only: %i[show create edit update destroy]
  def index
    @map = Map.where(user_id: current_user.id)
  end

  def show; end

  def new
    @map = Map.new
  end

  def create
    if @map.save
      render json: { error: nil }.to_json
    else
      render json: { error: 'Unable to create new map because x' }.to_json
    end
  end

  def edit; end

  def update; end

  def destroy
    if @map.destroy
      redirect_to maps_path
    else
      render json: { error: 'You did something stupid' }.to_json
    end
  end

  private

  def map_params
    params.require(:map).permit(:name, :lat, :lon, :map_style)
  end

  def fetch_map
    @map = Map.find(params[:id])
  end

  def use_react
    @use_react = true
  end
end
