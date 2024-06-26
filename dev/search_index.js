var documenterSearchIndex = {"docs":
[{"location":"docIndex.html#The-GilaElectromagnetics-Module","page":"An other page","title":"The GilaElectromagnetics Module","text":"","category":"section"},{"location":"docIndex.html","page":"An other page","title":"An other page","text":"GilaElectromagnetics","category":"page"},{"location":"docIndex.html#GilaElectromagnetics","page":"An other page","title":"GilaElectromagnetics","text":"GilaElectromagnetics implements single (complex) frequency electromagnetic Green functions between generalized source and target cuboid ``volumes''. Technical  details are available in the supporting document files.\n\nAuthor: Sean Molesky  Distribution: The code distributed under GNU LGPL.\n\n\n\n\n\n","category":"module"},{"location":"docIndex.html#Module-Index","page":"An other page","title":"Module Index","text":"","category":"section"},{"location":"docIndex.html","page":"An other page","title":"An other page","text":"Modules = [GilaElectromagnetics]\nOrder   = [:constant, :type, :function, :macro]","category":"page"},{"location":"docIndex.html#Detailed-API","page":"An other page","title":"Detailed API","text":"","category":"section"},{"location":"docIndex.html","page":"An other page","title":"An other page","text":"Modules = [GilaElectromagnetics]\nOrder   = [:constant, :type, :function, :macro]","category":"page"},{"location":"docIndex.html#GilaElectromagnetics.GlaKerOpt-Tuple{Bool}","page":"An other page","title":"GilaElectromagnetics.GlaKerOpt","text":"GlaKerOpt(devStt::Bool)\n\nSimplified GlaKerOpt constructor.\n\n\n\n\n\n","category":"method"},{"location":"docIndex.html#GilaElectromagnetics.GlaOprMem","page":"An other page","title":"GilaElectromagnetics.GlaOprMem","text":"GlaOprMem\n\nStorage structure for a Green function operator. .cmpInf–-computation information see GlaKerOpt .trgVol–-target volume of Green function .srcVol–-source volume of Green function .mixInf–-information for matching source and target grids, see GlaExtInf .dimInfC–-dimension information for Green function volumes, host side .dimInfD–-dimension information for Green function volumes, device side .egoFur–-unique Fourier transform data for circulant Green function .fftPlnFwd–-forward Fourier transform plans .fftPlnRev–-reverse Fourier transform plans .phzInf–-phase vector for splitting Fourier transforms\n\n\n\n\n\n","category":"type"},{"location":"docIndex.html#GilaElectromagnetics.GlaOprMem-Union{Tuple{T}, Tuple{GlaKerOpt, GlaVol}, Tuple{GlaKerOpt, GlaVol, Union{Nothing, GlaVol}}} where T<:Union{ComplexF64, ComplexF32}","page":"An other page","title":"GilaElectromagnetics.GlaOprMem","text":"function GlaOprMem(cmpInf::GlaKerOpt, trgVol::GlaVol,\nsrcVol::Union{GlaVol,Nothing}=nothing, \negoFur::Union{AbstractArray{<:AbstractArray{T}},\nNothing}=nothing)::GlaOprMem where T<:Union{ComplexF64,ComplexF32}\n\nPrepare memory for green function operator–-when called with a single GlaVol,  or identical source and target volumes, yields the self construction. \n\n\n\n\n\n","category":"method"},{"location":"docIndex.html#GilaElectromagnetics.GlaVol","page":"An other page","title":"GilaElectromagnetics.GlaVol","text":"GlaVol(cel::Array{<:Integer,1}, celScl::NTuple{3,Rational}, \norg::NTuple{3,Rational}, grdScl::NTuple{3,Rational}=celScl)::GlaVol\n\nConstructor for Gila Volumes.\n\n\n\n\n\n","category":"type"},{"location":"docIndex.html#GilaElectromagnetics.egoBrnDev!-Union{Tuple{T}, Tuple{GlaOprMem, Integer, Integer, AbstractArray{T}}} where T<:Union{ComplexF64, ComplexF32}","page":"An other page","title":"GilaElectromagnetics.egoBrnDev!","text":"egoBrnDev!(egoMem::GlaOprMem, lvl::Integer, bId::Integer, \nactVec::AbstractArray{T})::AbstractArray{T} where \nT<:Union{ComplexF64,ComplexF32}\n\nHead branching function implementing Green function action on device.\n\n\n\n\n\n","category":"method"},{"location":"docIndex.html#GilaElectromagnetics.egoBrnHst!-Union{Tuple{T}, Tuple{GlaOprMem, Integer, Integer, AbstractArray{T}}} where T<:Union{ComplexF64, ComplexF32}","page":"An other page","title":"GilaElectromagnetics.egoBrnHst!","text":"egoBrnHst!(egoMem::GlaOprMem, lvl::Integer, bId::Integer, \nactVec::AbstractArray{T})::AbstractArray{T} where \nT<:Union{ComplexF64,ComplexF32}\n\nHead branching function implementing Green function action on host.\n\n\n\n\n\n","category":"method"},{"location":"docIndex.html#GilaElectromagnetics.genEgoExt!-Union{Tuple{T}, Tuple{AbstractArray{T, 5}, GlaVol, GlaVol, GlaKerOpt}} where T<:Union{ComplexF64, ComplexF32}","page":"An other page","title":"GilaElectromagnetics.genEgoExt!","text":"genEgoExt!(egoCrcExt::AbstractArray{T,5}, trgVol::GlaVol, \nsrcVol::GlaVol, cmpInf::GlaKerOpt)::Nothing where \nT<:Union{ComplexF64,ComplexF32}\n\nCalculate circulant vector for the Green function between a target volume,  trgVol, and source volume, srcVol.\n\n\n\n\n\n","category":"method"},{"location":"docIndex.html#GilaElectromagnetics.genEgoMat-Tuple{Tuple{var\"#s16\", var\"#s16\", var\"#s16\"} where var\"#s16\"<:Rational, Tuple{var\"#s15\", var\"#s15\", var\"#s15\"} where var\"#s15\"<:Integer}","page":"An other page","title":"GilaElectromagnetics.genEgoMat","text":"function genEgoMat(celScl::{3,<:Rational}, \ncelNum::Ntuple{3,<:Integer})::Array{ComplexF64,2}\n\nGenerate dense matrix of a Green function. \n\n\n\n\n\n","category":"method"},{"location":"docIndex.html#GilaElectromagnetics.genEgoSlf!-Union{Tuple{T}, Tuple{AbstractArray{T, 5}, GlaVol, GlaKerOpt}} where T<:Union{ComplexF64, ComplexF32}","page":"An other page","title":"GilaElectromagnetics.genEgoSlf!","text":"genEgoSlf!(egoCrc::Array{ComplexF64}, slfVol::GlaVol, \ncmpInf::GlaKerOpt)::Nothing\n\nCalculate circulant vector of the Green function on a single domain.\n\n\n\n\n\n","category":"method"},{"location":"index.html#GilaElectromagnetics.jl","page":"Index","title":"GilaElectromagnetics.jl","text":"","category":"section"},{"location":"index.html","page":"Index","title":"Index","text":"Documentation for GilaElectromagnetics.jl https://github.com/moleskySean/GilaElectromagnetics.jl","category":"page"}]
}