class Api::CallsController < ApplicationController
  before_action :set_call, only: [:show, :update, :destroy]

  def index
    render json: Call.all
  end

  def show
    render json: @call
  end

  def create
    call = Call.new(call_params)

    if call.save
      render json: call
    else
      render json: call.errors, status: 422
    end
  end

  def update
    if @call.update(call_params)
      render json: @call
    else
      render json: @call.errors, status: 422
    end
  end

  def destroy
    @call.destroy
  end

  private
    def set_call
      @call = Product.find(params[:id])
    end

    def call_params
      params.require(:call).permit(:name, :description, :price, :department)
    end
end
