class MapsController < ApplicationController
  before_action :use_react, only: %i[new edit]

  def index; end

  def show; end

  def new; end

  def create; end

  def edit; end

  def update; end

  def destroy; end

  private

  def use_react
    @use_react = true
  end
end
